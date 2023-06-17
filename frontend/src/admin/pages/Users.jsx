import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

const w100 = {
  width: "100%",
};

const Users = () => {
  const [users, setUsers] = useState([]);
  const fetchUserList = () => {
    fetch("http://127.0.0.1:8000/api/v1/user/list")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data.data);
        document.getElementById("loading").innerHTML = "";
        document.getElementById("total-user").innerHTML = `(${users.length})`;
      });
  };
  useEffect(() => {
    fetchUserList();
  }, []);
  return (
    <>
      <div className="container-scroller">
        <Navbar />
        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
                        <h4 className="card-title">
                          Total Users <span id="total-user"></span>
                        </h4>
                      </div>
                      <table
                        id="example"
                        className="nowrap row-border table-hover table"
                        style={w100}
                      >
                        <thead>
                          <tr className="bg-primary bg-gradient text-light">
                            <th className="" scope="col">
                              #
                            </th>
                            <th className="" scope="col">
                              Name
                            </th>
                            <th className="" scope="col">
                              Email
                            </th>
                            <th className="" scope="col">
                              Mobile
                            </th>
                            <th className="" scope="col">
                              Profile
                            </th>
                          </tr>
                        </thead>
                        {users.length > 0 && (
                          <tbody id="fetch-user">
                            {users.map((user) => (
                              <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.mobile}</td>
                                <td>
                                  <button className="btn btn-primary py-2">
                                    View Profile
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        )}
                      </table>
                      <div
                        id="loading"
                        className="p-2 d-flex align-items-center flex-column"
                      >
                        <img
                          src="https://media.tenor.com/cWhSRPC9900AAAAj/loading-black.gif"
                          width="50px"
                        />
                        <p className=" text-muted p-2">
                          &nbsp;&nbsp;&nbsp; Loading !!!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
