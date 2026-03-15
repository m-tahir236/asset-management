import React from "react";
import { Link, Outlet } from "react-router-dom";
import { users } from "../constants/constants";

const Users = () => {
  return (
    <>
      {users.map((user) => (
        <Link to={`${user.id}`} key={user.id}>
          <div style={{ display: "flex", gap: "16px", padding: "12px" }}>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
          <hr />
        </Link>
      ))}
      <Outlet />
    </>
  );
};

export default Users;
