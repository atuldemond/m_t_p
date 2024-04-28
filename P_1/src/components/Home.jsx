import React, { useContext } from "react";
import { Link, Route } from "react-router-dom";
import Nav from "../utils/Nav";
import Context, { UserContext } from "../utils/Context";

const Home = () => {
  const { value } = useContext(UserContext);
  return (
    <div>
      <div className="h-[100%] text-6xl flex flex-col gap-3 justify-center items-center bg-purple-400">
        Home
        {value.map((data, index) => (
          <Link>{data.name}</Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
