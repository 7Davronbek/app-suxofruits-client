import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Navbar from "./components/Navbar";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
  <Navbar />
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/qwe" exact element={<App />} />
    </Routes>
  </Router>
);

reportWebVitals();
