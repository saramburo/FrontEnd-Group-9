import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Evento() {
  const [eventos, setEventos] = useState([
    { id: "0", descripcion: "Presentación Rock 1", fecha: "1/6/2024" },
    { id: "1", descripcion: "Presentación Jazz 1", fecha: "8/6/2024" },
    { id: "2", descripcion: "Presentación Punk 1", fecha: "16/6/2024" },
  ]);
  const [reservas, setReservas] = useState([]);

  const handleClick = (event) => {
    const itemId = event.target.id;
    console.log(itemId);
    const existeReserva = reservas.some((reserva) => reserva.id == itemId);

    console.log(existeReserva);
    if (existeReserva === false) {
      setReservas([
        ...reservas,
        {
          id: event.target.id,
          descripcion: event.target.value,
          fecha: event.target.getAttribute("fecha"),
        },
      ]);
    } else {
      alert("Ya hiciste una reserva para este evento");
    }
  };

  const cancelarReserva = (event) => {
    const itemId = event.target.id;
    const index = reservas.findIndex((item) => item.id === itemId);
    console.log(index);
    const nuevaReserva = [
      ...reservas.slice(0, index),
      ...reservas.slice(index + 1),
    ];
    setReservas(nuevaReserva);
  };

  return (
    <>
      <h2>Gestión de Reservas</h2>
      <div className="gestion-reservas">
        <div className="eventos-reservables">
          <h3>Eventos</h3>
          <ul>
            {eventos.map((evento) => {
              return (
                <>
                  <div className="bloque-reserva">
                    <li key={evento.id} className="evento">
                      {evento.descripcion}
                    </li>
                    <p className="evento">{evento.fecha}</p>
                    <button
                      id={evento.id}
                      value={evento.descripcion}
                      fecha={evento.fecha}
                      className="button-reserva"
                      onClick={handleClick}
                    >
                      Reserva
                    </button>
                  </div>
                </>
              );
            })}
          </ul>
        </div>
        <div className="reservacion">
          <h3>Mis Reservas</h3>
          <ul>
            {reservas.map((reserva) => {
              return (
                <>
                  <div className="reservas-realizadas-container">
                    <li key={reserva.id} className="reserva-realizada">
                      {reserva.descripcion}
                    </li>
                    <p className="reserva-realizada">{reserva.fecha}</p>
                    <button
                      hidden={reservas.length === 0 && reservas.length !== -1}
                      id={reserva.id}
                      onClick={cancelarReserva}
                    >
                      Cancelar Reserva
                    </button>
                  </div>
                </>
              );
            })}
          </ul>
        </div>
      </div>
      <NavLink to="/reservas">Atrás</NavLink>
    </>
  );
}

export default Evento;
