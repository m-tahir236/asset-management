import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LOAD_PROJECT } from "./constants/constants.js";
import Project from "./Project.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>{LOAD_PROJECT ? <Project /> : <App />}</StrictMode>,
);
