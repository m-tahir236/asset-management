import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { users } from "../constants/constants";

const UserDetails = () => {
  // const navigate = useNavigate();
  const routeParams = useParams();
  const { id: userId } = routeParams;

  const user = users.find((user) => user.id === parseInt(userId));

  const locationParams = useLocation();
  console.log("location", locationParams);

  if (!user) return <p>Loading</p>;

  return (
    <div>
      <h2>Welcome</h2>
      {locationParams.pathname.includes("/user/1") && (
        <p>User 1 specific content</p>
      )}
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      {/* <div style={{ display: "flex", gap: "12px" }}>
        <button style={{ marginTop: "12px" }} onClick={() => navigate("/about")}>
          About
        </button>
        <button style={{ marginTop: "12px" }} onClick={() => navigate("/contact")}>
          Contact
        </button>
        <button style={{ marginTop: "12px" }} onClick={() => navigate("/")}>
          Logout
        </button>
      </div> */}
    </div>
  );
};

export default UserDetails;
