import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import img1 from "../assets/pexels-razane-adra-13215204.jpg";
import img2 from "../assets/pexels-maria-orlova-4947565.jpg";
import img3 from "../assets/pexels-ruslan-alekso-1928131.jpg";
import img4 from "../assets/pexels-wendy-wei-1943411.jpg";
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
            <img src={img2} class="gallery__img" />
          </div>
          <div className="event-image-grid-3">
            <img src={img3} class="gallery__img" />
          </div>
          <div className="event-image-grid-4">
            <img src={img4} className="gallery__img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Eventos;
