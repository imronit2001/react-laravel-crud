import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Navbar from "./components/pages/Navbar";
import Signup from "./components/pages/Signup";
import Dashboard from "./admin/pages/Dashboard";
import Users from "./admin/pages/Users";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        {localStorage.getItem("isUserLoggedIn") != null ? <Navbar /> : ""}
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
