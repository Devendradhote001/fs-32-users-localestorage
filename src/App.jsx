import React, { useContext } from "react";
import Comp1 from "./components/Comp1";
import { MyStore } from "./context/MyContext";

const App = () => {
  let cd = useContext(MyStore);
  console.log(cd);
  return (
    <div>
      <Comp1 />
    </div>
  );
};

export default App;
