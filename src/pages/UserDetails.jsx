import React from "react";
import { useParams } from "react-router-dom";
import { users } from "../constants/constants";

const UserDetails = () => {
  const { id: userId } = useParams();
  const user = users.find((user) => user.id === parseInt(userId));

  if (!user) return <p>Loading</p>;

  return (
    <div>
      <h2>Welcome</h2>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Name: {user.email}</p>
    </div>
  );
};

export default UserDetails;
