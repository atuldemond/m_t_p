import React, { createContext, useEffect, useState } from "react";

import axios from "../utils/axios";

export const UserContext = createContext();

const Context = (props) => {
  const [value, setal] = useState(null);

  const getd = async () => {
    try {
      const { data } = await axios("/products");
      setal(data);
    } catch (error) {
      console.log("getting error in axios");
    }
  };

  useEffect(() => {
    getd();
  }, []);

  return (
    <UserContext.Provider value={[value, setal]}>
      {props.children}
    </UserContext.Provider>
  );
};

export default Context;
