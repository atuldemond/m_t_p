import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import Routing from "./utils/Routing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <> 
    
     {/* <Routing/> */}
      <Home />
    </>
  );
}

export default App;
