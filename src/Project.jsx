import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Assets from "./pages/Assets";
import Layout from "./components/Layout";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";

const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (!response.ok) throw new Error("Fail to fetch data");

  const result = response.json();
  console.log("fetchData", result);
  return result;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/assets", element: <Assets />, loader: fetchData },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/users",
        element: <Users />,
        children: [{ path: ":id", element: <UserDetails /> }],
      },
    ],
  },
]);

const Project = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Project;
