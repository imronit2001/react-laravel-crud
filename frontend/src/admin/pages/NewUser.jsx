import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

const w100 = {
  width: "100%",
};

const NewUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    dob: "",
    age: "",
  });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const doSomething = function (e) {
    e.preventDefault();
    let btn = document.getElementById("submit");
    btn.disabled = true;
    fetch(
      `http://127.0.0.1:8000/api/v1/user/create?name=${user.name}&email=${user.email}&mobile=${user.mobile}&password=${user.password}&dob=${user.dob}&age=${user.age}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data["status_code"] == 400) {
          alert(data["message"]);
          btn.disabled = false;
        } else {
          alert(data["message"]);
          btn.disabled = false;
          setUser({
            name: "",
            email: "",
            mobile: "",
            password: "",
            dob: "",
            age: "",
          });
        }
      });
  };

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
                        <h4 className="card-title">Create New User</h4>
                      </div>

                      <form
                        id="add-new-user-form"
                        onSubmit={doSomething}
                        className="form row"
                      >
                        <div className="form-group col-sm-6 m-0 mb-3">
                          <label className="m-0">
                            Name<span className="mandatory">*</span>
                          </label>
                          <div className="col-sm-12 ">
                            <input
                              onChange={onChange}
                              required
                              type="text"
                              placeholder="Name"
                              name="name"
                              id="name"
                              value={user.name}
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="form-group col-sm-6 m-0 mb-3">
                          <label className="m-0">
                            Enter User Email<span className="mandatory">*</span>
                          </label>
                          <div className="col-sm-12 ">
                            <input
                              onChange={onChange}
                              required
                              type="text"
                              placeholder="Enter User Email"
                              name="email"
                              id="email"
                              value={user.email}
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="form-group col-sm-6 m-0 mb-3">
                          <label className="m-0">
                            Enter User Mobile No
                            <span className="mandatory">*</span>
                          </label>
                          <div className="col-sm-12 ">
                            <input
                              onChange={onChange}
                              required
                              type="text"
                              placeholder="Enter User Mobile No"
                              name="mobile"
                              id="mobile"
                              value={user.mobile}
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="form-group col-sm-6 m-0 mb-3">
                          <label className="m-0">
                            Password<span className="mandatory">*</span>
                          </label>
                          <div className="col-sm-12 ">
                            <input
                              onChange={onChange}
                              required
                              type="password"
                              placeholder="Enter Password"
                              id="password"
                              value={user.password}
                              name="password"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="form-group col-sm-6 m-0 mb-3">
                          <label className="m-0">
                            Date of Birth<span className="mandatory">*</span>
                          </label>
                          <div className="col-sm-12 ">
                            <input
                              onChange={onChange}
                              required
                              type="date"
                              id="dob"
                              value={user.dob}
                              name="dob"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="form-group col-sm-6 m-0 mb-3">
                          <label className="m-0">
                            Age<span className="mandatory">*</span>
                          </label>
                          <div className="col-sm-12 ">
                            <input
                              onChange={onChange}
                              required
                              type="number"
                              placeholder="Enter Age"
                              id="age"
                              value={user.age}
                              name="age"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-end mt-3">
                          <button
                            type="submit"
                            id="submit"
                            value={user.submit}
                            className="btn btn-primary mx-5"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
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

export default NewUser;
