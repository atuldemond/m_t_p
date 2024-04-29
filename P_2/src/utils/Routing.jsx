import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Cards from "../components/Cards";
import About from "../components/About";
const Routing = () => {
  return (
    <>
      <nav>
       <NavLink></NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default Routing;
