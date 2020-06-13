import React from "react";
import { Link } from "react-router-dom";
import ReactSearchBox from "react-search-box";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <ReactSearchBox />
    </div>
  );
}

export default Navigation;
