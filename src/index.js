import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Navbar from "./components/Navbar";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";
import AboutCompany from "./pages/AboutCompany";
import Footer from "./components/Footer";
import Socials from "./components/Socials";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
  <Navbar />
  <Socials />

    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/about-company" exact element={<AboutCompany />} />
    </Routes>

    <Footer />
  </Router>
);

reportWebVitals();
