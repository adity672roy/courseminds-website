import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex nav">
      <Link to={"/"}>
        <h1 className="logo">CourseMinds</h1>
      </Link>
      <div className="flex">
        <p className="dashboard account">Account</p>
        <Link to={"/dashboard"}>
          <p className="dashboard">Dashboard</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
