import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink, Outlet, Navigate } from "react-router-dom";
import img1 from "../assets/steve-allison-LRx-y4bRdMA-unsplash.jpg";
function Reservas() {
  return (
    <>
      <main>
        <div className="title-container">
          <h2 className="title-text">Reserva</h2>
        </div>

        <div className="reserva-container-section-1">
          <div className="reserva-image-container">
            <img className="reserva-image" src={img1} />
          </div>
          <div className="reserva-evento-section">
            <div className="reserva-evento-botón-1">
              <NavLink to="/evento" className="reserva-boton">
                Evento
              </NavLink>
            </div>
            <div className="reserva-evento-botón-2">
              <NavLink to="/dia" className="reserva-boton">
                Día
              </NavLink>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Reservas;
