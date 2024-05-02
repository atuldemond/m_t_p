
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "../utils/axios";


export const UserDetail = createContext();

const Context = (props) => {
  const [product, setproduct] = useState(null);

  const finaldata = async () => {
    try {
      const { data } = await axios("/products");
      // console.log(data);
      setproduct(data);
    } catch (error) {
      console.log(data);
    }
  };

  useEffect(() => {
    finaldata();
  }, []);

  return (
    <UserDetail.Provider value={[product, setproduct]}>
      {props.children}
    </UserDetail.Provider>
  );
};

export default Context;
