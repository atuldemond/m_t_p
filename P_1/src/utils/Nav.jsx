import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Services from "../components/Services";

const Nav = () => {
  return (
    <>
      <div className="w-screen h-[8vh] bg-red-200 flex justify-center items-center gap-4 font-semibold  text-2xl">
        <Link className="hover:bg-black p-1 hover:text-white " to="/">
          Home
        </Link>
        <Link className="hover:bg-black p-1 hover:text-white " to="/about">
          About
        </Link>
        <Link className="hover:bg-black p-1 hover:text-white " to="/services">
          Services
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
};

export default Nav;
