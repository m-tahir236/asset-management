import React from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const users = [
    {
      id: 1,
      name: "Tahir",
      email: "tahir@mail.com",
    },
    {
      id: 2,
      name: "Aiman",
      email: "aiman@mail.com",
    },
    {
      id: 3,
      name: "Raza",
      email: "raza@mail.com",
    },
    {
      id: 4,
      name: "Zain",
      email: "zain@mail.com",
    },
  ];
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
