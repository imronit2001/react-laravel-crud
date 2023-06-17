import React from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <React.Fragment>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                  <div className="brand-logo">
                    <img src="../../images/logo.svg" alt="logo" />
                  </div>
                  <h4>Hello! let's get started</h4>
                  <h6 className="fw-light">Create your account</h6>
                  <form className="pt-3">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="exampleInputName"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="tel"
                        className="form-control form-control-lg"
                        id="exampleInputMobile"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="exampleInputEmail1"
                        placeholder="Email Id"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mt-3">
                      <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
                        Sign Up
                      </button>
                    </div>
                    <div className="text-center mt-4 fw-light">
                      Already have an account?{" "}
                      <Link to="/" className="text-primary">
                        Signin
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
