import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="ul-navbar">
          <li className="li-navbar">
            <NavLink className="header-nav-link" to="/home">
              Imagen/Nombre del Bar
            </NavLink>
          </li>
          <li className="li-navbar">
            <NavLink className="header-nav-link" to="eventos">
              Eventos
            </NavLink>
          </li>
          <li className="li-navbar">
            <NavLink className="header-nav-link" to="menu">
              Menu
            </NavLink>
          </li>
          <li className="li-navbar">
            <NavLink className="header-nav-link" to="about">
              Nosotros
            </NavLink>
          </li>
          <div className="content-reservas">
            <li className="li-navbar.reservas">
              <NavLink className="header-nav-link-reservas" to="reservas">
                Reservas
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
