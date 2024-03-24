import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <Navbar className="navigation" />
      </div>
    </>
  );
}

export default Header;
