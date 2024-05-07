import React, { useContext, useEffect, useState } from "react";
import Nav from "../utils/Nav";
import { productdataContext } from "../utils/Context";
import Loading from "../utils/Loading";

const Home = () => {
  const [products, setproducts] = useContext(productdataContext);

  useEffect(() => {
    // const single_category = [...new Set(products.map((val) => val.category))];
    // console.log(single_category);
  }, []);

  return products ? (
    <div className="main flex  w-screen h-[400vh] ">
      <div className="category  flex flex-col  gap-2 bg-red-200 w-[15vw] "></div>

      <div className="w-[100vw] h-[400vh] bg-blue-300 justify-center  flex flex-wrap ">
        {products.map((a, i) => (
          <div
            key={a.id}
            className="cards w-[13vw] h-[60vh] my-[3vh] mx-[3vw] flex flex-col items-center  px-[1vw] py-[1vh] bg-white"
          >
            <div className="img">
              <img
                className=" w-[10vw] mb-[2vh] object-fill h-[25vh] "
                src={a.image}
                alt=""
              />
            </div>
            <div className="title  w-[10vw] h-[10vh]  mb-[2vh] text-center">
              {a.title}
            </div>
            <div className="btn">
              <button className="bg-red-200 px-[1vw] py-[1vh] mt-[10vh]">
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Home;
