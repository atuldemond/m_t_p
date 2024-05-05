import React, { createContext, useEffect, useState } from "react";
import axios from "./axios";

export const productdataContext = createContext(); //context must be written

const Context = (props) => {
  const [productdata, setproductdata] = useState(null);

  const callapi = async () => {
    try {
      const { data } = await axios("/products");
      setproductdata(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callapi();
  }, []);

  return (
    <productdataContext.Provider value={[productdata, setproductdata]}>
      {props.children}
    </productdataContext.Provider>
  );
};

export default Context;
