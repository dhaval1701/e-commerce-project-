// src/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          E-Commerce
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Products
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
