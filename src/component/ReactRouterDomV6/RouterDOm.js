import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import About from "./Component/About";
import Error from "./Component/Error";
import Home from "./Component/Home";
import Profile from "./Component/Profile";
import SubAbout from "./Component/SubAbout";

const RouterDom = () => {
  return (
    <Router>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/about">About</Link>
      </button>
      <button>
        <Link to="/profile/akash">Profile</Link>
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About name="About" />}>
          <Route path="subabout" element={<SubAbout />} />
        </Route>
        <Route path="/profile/:name" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default RouterDom;
