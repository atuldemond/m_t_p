import React from "react";
import { UserDetail } from "../utils/Context";
import { useContext } from "react";
import Loading from "./Loading";

const Cards = () => {
  const [products] = useContext(UserDetail);
  console.log(products);

  return products ? (
    <div className="w-[80vw] h-full m-auto  flex flex-wrap  gap-7 justify-center items-center  py-10 px-10 bg-black ">
      {products.map((v, i) => (
        <div className="cards rounded-xl hover:scale-110 ease-out duration-75 mt-4  bg-white w-[15vw] h-[60vh] flex flex-col justify-center items-center gap-2  px-2 ">
          <div className="image  ">
            <img
              className="w-[12vw] h-[20vh] object-fit bg-no-repeat hover:scale-110 ease-out duration-75 "
              src={v.image}
              alt=""
            />
          </div>
          <div className="title w-[15vw] h-[5vh] font-bold text-center  mt-5 mb-10">
            {v.title}
          </div>
          <div className="price w-[15vw]  font-extrabold text-center text-2xl  mt-8 mb-5 ">
            ${v.price}
          </div>
          <button className="bg-red-100 p-2 mt-5 font-semibold px-5 rounded-md hover:bg-red-400">
            Buy Now
          </button>
        </div>
      ))}
    </div>
  ) : (
    <Loading />
  );
};

export default Cards;
