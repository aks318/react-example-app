import React, { useEffect } from "react";
import useCounter from "./useCounter";

const Child = ({ func1 }) => {
  const { counter, handlIncre } = useCounter();

  useEffect(() => {
    console.log("child");
  }, [func1]);
  return (
    <div>
      <button onClick={func1}>Child Click</button>

      <br />

      {counter}
      <button onClick={handlIncre}>Incre</button>
    </div>
  );
};

export default Child;
