import React from "react";
import Comp3 from "./Comp3";

const Comp2 = () => {
  return (
    <div>
      <h1>Comp 2 inside comp 1</h1>
      <Comp3 />
    </div>
  );
};

export default Comp2;
