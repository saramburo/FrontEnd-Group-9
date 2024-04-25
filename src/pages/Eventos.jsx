import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import img1 from "../assets/pexels-razane-adra-13215204.jpg";
function Eventos() {
  return (
    <>
      <div className="title-container">
        <h2 className="title-text">Eventos</h2>
      </div>
      <div className="grid-container">
        <div className="about-image-grid">
          <div className="event-image-grid-1">
            <img src={img1} class="gallery__img" />
          </div>
          <div className="event-image-grid-2">
            <img
              src="src\assets\pexels-maria-orlova-4947565.jpg"
              class="gallery__img"
            />
          </div>
          <div className="event-image-grid-3">
            <img
              src="src\assets\pexels-ruslan-alekso-1928131.jpg"
              class="gallery__img"
            />
          </div>
          <div className="event-image-grid-4">
            <img
              src="src\assets\pexels-wendy-wei-1943411.jpg"
              class="gallery__img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Eventos;
