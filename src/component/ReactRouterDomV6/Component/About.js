import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const About = ({ name }) => {
  console.log(name);
  const location = useLocation();
  console.log(location);
  return (
    <div>
      About
      <Outlet />
      About
    </div>
  );
};

export default About;
