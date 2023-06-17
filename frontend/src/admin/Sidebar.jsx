import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              <i className="mdi mdi-grid-large menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item nav-category">Registration</li>
          <li className="nav-item">
            <Link
              className="nav-link"
              data-bs-toggle="collapse"
              to="#Registration"
              aria-expanded="false"
              aria-controls="Registration"
            >
              <i className="menu-icon mdi mdi-floor-plan"></i>
              <span className="menu-title">Registration</span>
              <i className="menu-arrow"></i>
            </Link>
            <div className="collapse" id="Registration">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="/users">
                    List of Users
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
