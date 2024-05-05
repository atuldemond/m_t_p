import React from "react";

const Category = () => {
  return (
    <div>
      <div className="catlog bg-red-200 w-[80vw] m-auto ">map</div>

      <div className="w-[80vw] h-[100vh] bg-blue-300 m-auto flex flex-col ">
        <div className="cards w-[13vw] h-[48vh] my-[3vh] mx-[3vw] flex flex-col items-center  px-[1vw] py-[1vh] bg-white">
          <div className="img">
            <img
              className=" w-[10vw] mb-[2vh] object-fill h-[25vh] "
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt=""
            />
          </div>
          <div className="title mb-[2vh] text-center">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </div>
          <div className="btn">
            <button className="bg-red-200 px-[1vw] py-[1vh]">
              {" "}
              Know More{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
