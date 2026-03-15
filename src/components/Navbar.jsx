import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => ({
    backgroundColor: isActive ? "black" : "transparent",
    color: isActive ? "white" : "black",
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "12px",
          padding: "8px",
          backgroundColor: "white",
        }}
      >
        <NavLink to={"/"} style={navLinkStyles}>
          Home
        </NavLink>
        <NavLink to={"/about"} style={navLinkStyles}>
          About
        </NavLink>
        <NavLink to={"/contact"} style={navLinkStyles}>
          Contact us
        </NavLink>
        <NavLink to={"/users"} style={navLinkStyles}>
          User
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
