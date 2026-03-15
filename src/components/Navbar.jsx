import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => ({
    backgroundColor: isActive ? "black" : "transparent",
    color: isActive ? "white" : "black",
    padding: "4px 8px",
    borderRadius: "4px"
  });

  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = () => {
    setLoggedIn(true);
    navigate("/users");
  };

  const logout = () => {
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "12px",
          padding: "8px",
          marginBottom: "12px", // TODO - Remove
          backgroundColor: "white",
        }}
      >
        {isLoggedIn && (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <NavLink to={"/users"} style={navLinkStyles}>
              Users
            </NavLink>
            <button onClick={logout}>Logout</button>
          </div>
        )}
        {!isLoggedIn && (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div style={{display: "flex", gap: "12px"}}>
              <NavLink to={"/"} style={navLinkStyles}>
                Home
              </NavLink>
              <NavLink to={"/about"} style={navLinkStyles}>
                About
              </NavLink>
              <NavLink to={"/contact"} style={navLinkStyles}>
                Contact us
              </NavLink>
            </div>
            <button onClick={login}>Login</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
