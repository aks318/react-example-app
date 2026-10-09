import React, { useEffect, useState } from "react";

const Resize = () => {
  const [visibility, setVisibility] = useState([window.innerWidth]);
  useEffect(() => {
    window.addEventListener("visibilitychange", () => {
      console.log("visibility");
      setTimeout(() => {
        setVisibility((prev) => [...prev, window.innerWidth]);
      }, 3000);
    });
    return () => {
      window.removeEventListener("visibilitychange", () => {});
    };
  }, []);

  return (
    <div>
      {visibility.map((data, i) => (
        <p>{data.toString()}</p>
      ))}
    </div>
  );
};

export default Resize;
