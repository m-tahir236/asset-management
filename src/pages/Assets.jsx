import React from "react";
import { useLoaderData } from "react-router-dom";

const Assets = () => {
  const result = useLoaderData();
  console.log("prefetched data:", result);

  return (
    <div>
      <h2>Assets</h2>
      <p>ID: {result.id}</p>
      <p>Title: {result.title}</p>
    </div>
  );
};

export default Assets;
