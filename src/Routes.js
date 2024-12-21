import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage.js";
import AdminPage from "./components/AdminPage.js";

function RoutesConfig() {
  return (
    <Router>
      <Routes>
        {/* Define the route for the HomePage */}
        <Route path="/" element={<HomePage />} />

        {/* Define the route for the AdminPage */}
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default RoutesConfig;
