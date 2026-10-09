import React, { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(1);
  const handlIncre = () => setCounter((prev) => prev + 1);

  return { counter, handlIncre };
};

export default useCounter;
