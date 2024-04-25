import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Dia() {
  const [date, setDate] = useState(new Date());
  const [personas, setPersonas] = useState(0);
  const [correo, setCorreo] = useState("");
  const handleClick = (event) => {
    if (date !== "" && personas > 0 && (correo !== null || correo !== "")) {
      alert(
        `Solicitud Enviada, espera tu confirmación en: ${correo} y ${personas} personas`
      );
    } else {
      alert("falta info");
    }
  };

  const handlePersonasChange = (event) => {
    const cantidad = event.target.value;
    setPersonas(cantidad);
  };
  const handleCorreoChange = (event) => {
    const mail = event.target.value;
    setCorreo(mail);
  };

  return (
    <>
      <p>Selecciona Día de la Reserva</p>
      <form>
        <DatePicker selected={date} onChange={(date) => setDate(date)} />
        <label>Cantidad de Personas</label>
        <input
          defaultValue="0"
          type="number"
          id="nreserva"
          name="nreserva"
          onChange={handlePersonasChange}
        />

        <label>Escribe tu correo</label>
        <input type="email" name="correo" onChange={handleCorreoChange} />
        <input
          type="button"
          value="Confirmar Reserva"
          id="confirmar"
          name="confirmar"
          onClick={handleClick}
        />
      </form>
      <NavLink to="/reservas">Atrás</NavLink>
    </>
  );
}

export default Dia;
