import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Auth from "./Auth"; // Main Auth component

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Auth />
  </BrowserRouter>
);
