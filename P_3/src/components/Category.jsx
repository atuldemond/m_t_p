import React, { useEffect } from "react";
import { useContext } from "react";
import { UserDetail } from "../utils/Context";
import Loading from "./Loading";

const Category = () => {
  const [products, setproduct] = useContext(UserDetail);
  const filt = async () => {
    const a = await products.filter(
      (value) => value.category == "men's clothing"
    );
    setproduct(a);
    console.log(a);
  };

  useEffect(() => {
    filt();
  }, []);

  return products ? (
    <div>
      <div className="catgeroy flex  gap-10 justify-center border 0 border-r-2">
        <div className="men border bg-gray-10 border-r-2 py-2 px-5">
          men's clothing
        </div>
        <div className="men border bg-gray-10 border-r-2 py-2 px-5">
          jewelery
        </div>
        <div className="men border bg-gray-10  border-r-2 py-2 px-5">
          electronics
        </div>
        <div className="men border bg-gray-10 border-r-2 py-2 px-5">
          women's clothing
        </div>
      </div>

      {products.map((v, i) => (
        <div>
          <div className="cards flex flex-col gap-10 w-[20vw] ">
            <div className="title">{v.title}</div>
            <div className="price"> {v.price}</div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <Loading />
  );
};

export default Category;
