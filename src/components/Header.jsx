import React from "react";
import NavBar from "./NavBar";
import About from "../pages/About.jsx";
import HomePage from "../pages/HomePage.jsx";
import ProductPage from "../pages/ProductPage.jsx";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Link} from "react-router-dom";
function Header() {
  return (
    <section className="Header flex space-between container">
      <Link className="logo" to="/">
        logo
      </Link>
      <nav className="NavBar">
        {/* <Link to="/">Home</Link> */}
        <div className="nav-link"><Link to="/product">Shop</Link></div>
        <div className="nav-link"><Link to="/about">About</Link></div>
        <div className="nav-link"><Link className="logged-in-avatar" to="/about">avatar</Link></div>
        <div className="nav-link"><Link className="logged-in-avatar" to="/about">Cart</Link></div>
      </nav>
    </section>
  );
}
export default Header;
