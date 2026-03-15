import React from "react";
import { Link } from "react-router-dom";
import { users } from "../constants/constants";

const Users = () => {
  return (
    <>
      {users.map((user, index) => (
        <>
          <Link to={`/user/${user.id}`}>
            <div
              key={index}
              style={{ display: "flex", gap: "16px", padding: "12px" }}
            >
              <p>{user.id}</p>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          </Link>
          <hr />
        </>
      ))}
    </>
  );
};

export default Users;
