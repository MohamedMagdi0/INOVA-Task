import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link
          style={{ textDecoration: "none", fontSize: 30, color: "green" }}
          to="/"
        >
          Inova
        </Link>
        <Link style={{ textDecoration: "none" }}>
          <span>courses</span>
        </Link>
        <Link style={{ textDecoration: "none" }}>
          <span>contact Us</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
