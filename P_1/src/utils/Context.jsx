import React, { createContext, useState } from "react";

export const UserContext = createContext();

const Context = (props) => {
  const [value, setal] = useState([
    { id: 1, name: "Atul Demond" },
    { id: 2, name: "Rahul Demond" },
    { id: 3, name: "Sumit Demond" },
  ]);
  return (
    <UserContext.Provider value={{ value, setal }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default Context;
