import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Cards from "../components/Cards";
import Category from "../components/Category";
import Home from "../components/Home";

const Nav = () => {
  return (
    <div>
      <div className=" w-[100vw] h-[10vh]  bg-blue-100 flex justify-center items-center py-5 gap-10   ">
        <Link
          className=" hover:bg-red-300 px-3 py-3 hover:scale-110 duration-75  "
          to="/"
        >
          Home
        </Link>
        <Link
          className=" hover:bg-red-300 px-3 py-3 hover:scale-110 duration-75  "
          to="/cards"
        >
          Cards
        </Link>
        <Link
          className=" hover:bg-red-300 px-3 py-3 hover:scale-110 duration-75  "
          to="/category"
        >
          Category
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  );
};

export default Nav;
