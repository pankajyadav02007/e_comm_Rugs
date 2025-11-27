import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Locations from "./pages/Locations";
import Catalogue from "./pages/Catalogue";
import Enquiry from "./pages/Enquiry";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import LoginSignup from "./pages/LoginSignup";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/loginsignup" element={<LoginSignup />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
