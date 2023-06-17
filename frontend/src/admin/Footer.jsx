import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="d-sm-flex justify-content-center justify-content-sm-between">
          <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
            Premium{" "}
            <Link tp="https://www.bootstrapdash.com/" target="_blank">
              Bootstrap admin template
            </Link>{" "}
            from BootstrapDash.
          </span>
          <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
            Copyright © 2021. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
