import React, { useCallback, useEffect, useState } from "react";
import Child from "./Child";
import Child2 from "./Child2";

const data = [
  { name: "Aakash", id: 1 },
  { name: "Karma", id: 2 },
];

const Practice = () => {
  const [counter, setCounter] = useState(1);
  useEffect(() => {}, []);
  const func1 = useCallback(() => {
    console.log("func1", counter);
  }, [counter]);
  return (
    <div>
      hell
      {/* {counter}
      <button onClick={() => setCounter((prev) => prev + 1)}>CLick</button>
      <Child func1={func1} />

      <Child2 /> */}
      <ul>
        {data.map((row) => (
          <li key={row.id}>{row.name}</li>
        ))}
      </ul>
      <ul>
        {data.map((row) => (
          <li key={row.id}>{row.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Practice;
