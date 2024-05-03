import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserDetail } from "../utils/Context";
import Loading from "./Loading";

const Category = () => {
  const [products, setproduct] = useContext(UserDetail);
  const [category, setcategory] = useState(null);

  const filteritems = async () => {
    const single_category = await [
      ...new Set(products.map((val) => val.category)),
    ];
    setcategory(single_category);
    // const catego = products.map((value) => single_category == value.category);

    // console.log(catego);
  };
  console.log(category);

  useEffect(() => {
    filteritems();
  }, []);

  return products ? (
    <div className="dib flex ">
      <div className="categor w-[20%] h-screen  flex flex-col px-5 py-5 gap-4">
        {category.map((value) => (
          <div className="div flex gap-3">
            <span className=" w-[15px] h-[15px] bg-red-300 rounded-r"></span>
            <h1>{value}</h1>
          </div>
        ))}
      </div>

      <div className="items w-[80%] bg-black flex flex-wrap gap-4 justify-between  items-center px-10 py-10 ">
        {products.map((v, i) => (
          <div
            key={v.id}
            className="cards rounded-xl hover:scale-110 ease-out duration-75 mt-5  bg-white w-[15vw] h-[60vh] flex flex-col justify-center items-center gap-2  px-2 "
          >
            <div className="image  ">
              <img
                className="w-[12vw] h-[18vh] object-fit bg-no-repeat hover:scale-110 ease-out duration-75 "
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
    </div>
  ) : (
    <Loading />
  );
};

export default Category;
