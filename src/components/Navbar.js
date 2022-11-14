import React from "react";
import earth from "../earth.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <img src={earth} alt="" />
      <span>my travel journal.</span>
    </nav>
  );
};

export default Navbar;
