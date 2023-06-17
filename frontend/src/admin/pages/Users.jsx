import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

const w100 = {
  width: "100%",
};

const Users = () => {
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
                        className="nowrap row-border table-hover"
                        style={w100}
                      >
                        <thead>
                          <tr className="bg-primary bg-gradient text-light">
                            <th className="text-center" scope="col">
                              #
                            </th>
                            <th className="text-center" scope="col">
                              Name
                            </th>
                            <th className="text-center" scope="col">
                              Email
                            </th>
                            <th className="text-center" scope="col">
                              Mobile
                            </th>
                            <th className="text-center" scope="col">
                              Profile
                            </th>
                          </tr>
                        </thead>
                        <tbody id="fetch-user"></tbody>
                      </table>
                      <div
                        id="loading"
                        className="p-2 d-flex align-items-center flex-column"
                      >
                        <img
                          src="https://media.tenor.com/cWhSRPC9900AAAAj/loading-black.gif"
                          width="50px"
                        />
                        <p className="text-center text-muted p-2">
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
