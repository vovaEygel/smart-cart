import React from "react";
import {Link} from "react-router-dom";
// import HomePage from "../pages/HomePage.jsx";

export default (props) => {
  return (
    <nav className="NavBar">
      <Link to="/">Home</Link>
      <Link to="/product">Shop</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};
