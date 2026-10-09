import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNav = () => {
    return <Navigate to="/about" myname="Aakash" />;
  };
  return (
    <div>
      <button onClick={() => navigate("/about", { state: "Hello Aaaksh" })}>
        Its Home , GOTO About
      </button>
      <button onClick={handleNav}>About</button>
    </div>
  );
};

export default Home;
