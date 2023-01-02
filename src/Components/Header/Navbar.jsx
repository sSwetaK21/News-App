import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="navbar">
      <ul>
        <li className="brandName">
          <Link to="/">NewsBuzz</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <input
            type="search"
            className="search"
            placeholder="Search News By Title"
            onChange={(e) => {
              props.getfun(e.target.value);
            }}
          />
        </li>
        {/* <a href="#" className="top">
          Back to Top &#8593;
        </a> */}
      </ul>
    </div>
  );
}

export default Navbar;
