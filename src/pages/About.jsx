import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <div className="title-container">
        <h2 className="title-text">Nosotros</h2>
      </div>
      <div className="grid-container">
        <div className="about-image-grid">
          <div className="about-image-grid-1">
            <img
              src="src\assets\aleksandr-popov-2GNBoMgKYEo-unsplash (1).jpg"
              class="gallery__img"
            />
          </div>
          <div className="about-image-grid-2">
            <img
              src="src\assets\j-williams-5lWfPoWH6EY-unsplash.jpg"
              class="gallery__img"
            />
          </div>
          <div className="about-image-grid-3">
            <img
              src="src\assets\adam-jaime-YeH5EIRFCIs-unsplash.jpg"
              class="gallery__img"
            />
          </div>
          <div className="about-image-grid-4">
            <img
              src="src\assets\stanislav-ivanitskiy-j5SwUbcgeyA-unsplash.jpg"
              class="gallery__img"
            />
          </div>
          <div className="about-image-grid-5">
            <img
              src="src\assets\jessica-flores-J8B7NUvhrYs-unsplash.jpg"
              class="gallery__img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
