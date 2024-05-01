import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Cards from "../components/Cards";
import Category from "../components/Category";
const Routing = () => {
  return (
    <div>
      <div className="nav w-full bg-red-200 p-7 flex justify-center gap-10">
        <Link to="/">Home</Link>
        <Link to="/about">About </Link>
        <Link to="/cards">Cards</Link>
        <Link to="/category">Category</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  );
};

export default Routing;
