import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink, Outlet, Navigate } from "react-router-dom";
import img1 from "../assets/florencia-viadana-mI61X5I-jKQ-unsplash.jpg";

function Reservas() {
  return (
    <>
      <main>
        <div className="title-container">
          <h2 className="title-text">Reserva</h2>
        </div>
        <div className="reserva-container">
          <div className="reserva-container-section-1">
            <div className="reserva-image-container">
              <img className="reserva-image" src={img1} />
            </div>
            <div className="reserva-evento-section">
              <div className="reserva-evento-botón-1">
                <NavLink to="/evento" className="selected">
                  Evento
                </NavLink>
              </div>
              <div className="reserva-evento-botón-2">
                <NavLink to="/dia">Día</NavLink>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Reservas;
