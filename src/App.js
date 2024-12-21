import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./components/ProductContext.js";
import HomePage from "./components/HomePage.js";
import AdminPage from "./components/AdminPage.js";

function App() {
  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
