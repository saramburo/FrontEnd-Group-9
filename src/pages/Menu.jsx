import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import img1 from "../assets/spencer-davis-D_tWwR0p9vE-unsplash.jpg";

function Menu() {
  return (
    <>
      <main>
        <div className="reserva-container">
          <div className="subtitle">
            <h2>Menú Online</h2>
          </div>
          <div className="reserva-container-section-2">
            <div className="reserva-image-container">
              <img className="reserva-image-2" src={img1} />
            </div>
            <div className="reserva-evento-section">
              <div className="reserva-evento-botón-2">Comida</div>
              <div className="reserva-evento-botón-1">Bebidas</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Menu;
