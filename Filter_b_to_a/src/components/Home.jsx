import React, { useContext, useEffect, useState } from "react";
import Nav from "../utils/Nav";
import { productdataContext } from "../utils/Context";
import Loading from "../utils/Loading";
import axios from "axios";

const Home = () => {
  // const [products, setproducts] = useContext(productdataContext);
  const [homedata, sethome] = useState([]);

  const getingapidata = async () => {
    try {
      // const { data } =
      axios.get("https://fakestoreapi.com/products").then((res) => {
        sethome(res.data);
        const catego = ["All", ...new Set(homedata.map((val) => val.category))];
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getingapidata();
  }, []);

  return homedata ? (
    <div className="main flex  w-screen h-[400vh] ">
      <div className="category  bg-red-200 w-[15vw] ">
        {/* {catego.map((val) => (
          <>hii</>
        ))} */}
      </div>

      <div className="w-[100vw] h-[400vh] bg-blue-300 justify-center  flex flex-wrap ">
        {homedata.map((a, i) => (
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
