import React, { useContext } from "react";
import { UserContext } from "../utils/Context";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Cards = () => {
  const [value] = useContext(UserContext);
  console.log(value);
  const navigate = useNavigate();

  return value ? (
    <div className="w-[80vw] h-auto py-10 flex  flex-wrap justify-center  px-10 m-auto bg-gray-200 ">
      {value.map((p, i) => (
        <Link>
          <div className="cards w-[20vw] scale-75  hover:scale-100 ease-out duration-75 bg-yellow-100 h-[60vh] border border-black flex flex-col justify-center items-center  ">
            <div className="img flex justify-center">
              <img
                className="w-[10vw] h-[20vh] object-fit   bg-center p-2"
                src={p.image}
                alt=""
              />
            </div>
            <div className="title text-center w-[20vw]   font-bold ">
              {p.title}
            </div>
            <div className="des text-1xl font-bold text-center mt-3.5 mb-3">
              ${p.price}
            </div>
            <button
              onClick={() => navigate(-1)}
              className=" bg-red-200 px-5 py-3 mx-20 font-semibold my-2"
            >
              Go Back
            </button>
          </div>
        </Link>
      ))}
    </div>
  ) : (
    <Loading />
  );
};

export default Cards;
