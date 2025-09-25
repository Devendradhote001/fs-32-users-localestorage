import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Comp3 = () => {
  let cd = useContext(MyStore);
  console.log(cd);
  return (
    <div>
      <h1>Comp3 inside comp2 </h1>
    </div>
  );
};

export default Comp3;
