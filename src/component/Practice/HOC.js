import React, { useState } from "react";

const HOC = (NC) => {
  const PowerfullC = () => {
    const [counter, setCounter] = useState(1);
    const handleIncre = () => {
      setCounter((prev) => prev + 1);
    };
    return <NC counter={counter} handleIncre={handleIncre} />;
  };

  return PowerfullC;
};

export default HOC;
