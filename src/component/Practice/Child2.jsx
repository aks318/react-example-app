import React from "react";
import HOC from "./HOC";

const Child2 = ({ counter, handleIncre }) => {
  return (
    <div>
      Child2
      {counter}
      <button onClick={handleIncre}>Click</button>
    </div>
  );
};

export default HOC(Child2);
