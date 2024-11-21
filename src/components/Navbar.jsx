import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to="/" className="btn btn-outline-success" >Home</NavLink>
        <NavLink to="/about" className="btn btn-outline-success" >About</NavLink>
        <NavLink to="/blog" className="btn btn-outline-success" >Blog</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
