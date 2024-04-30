import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Cards from "../components/Cards";
import About from "../components/About";
const Routing = () => {
  return (
    <>
      <nav className="flex gap-5 justify-center items-center bg-red-200 w-[100vw] h-[7vh]">
        <Link
          className=" border border-2 border-black px-5 py-1 hover:bg-white font-semibold "
          to="/"
        >
          Home
        </Link>
        <Link
          className=" border border-2 border-black px-5 py-1 hover:bg-white font-semibold "
          to="/cards"
        >
          Cards
        </Link>
        <Link
          className=" border border-2 border-black px-5 py-1 hover:bg-white font-semibold "
          to="/about"
        >
          About
        </Link>
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
