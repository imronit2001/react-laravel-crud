import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsMonkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/business">
                  business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/entertainment"
                >
                  entertainment
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/health">
                  health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/science">
                  science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/sports">
                  sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/technology">
                  technology
                </Link>
              </li>
            </ul>
            <form className="d-flex justify-content-center">
              <p className="text-white m-auto px-2">
                <i>Created by : </i>
                <span className="blockquote">Ronit Singh</span>
              </p>
            </form>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Navbar;
