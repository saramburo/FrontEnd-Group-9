import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import img1 from "../assets/aleksandr-popov-2GNBoMgKYEo-unsplash.jpg";
import img2 from "../assets/j-williams-5lWfPoWH6EY-unsplash.jpg";
import img3 from "../assets/adam-jaime-YeH5EIRFCIs-unsplash.jpg";
import img4 from "../assets/stanislav-ivanitskiy-j5SwUbcgeyA-unsplash.jpg";
import img5 from "../assets/jessica-flores-J8B7NUvhrYs-unsplash.jpg";

function About() {
  return (
    <>
      <div className="title-container">
        <h2 className="title-text">Nosotros</h2>
      </div>
      <div className="grid-container">
        <div className="about-image-grid">
          <div className="about-image-grid-1">
            <img src={img1} class="gallery__img" />
          </div>
          <div className="about-image-grid-2">
            <img src={img2} class="gallery__img" />
          </div>
          <div className="about-image-grid-3">
            <img src={img3} class="gallery__img" />
          </div>
          <div className="about-image-grid-4">
            <img src={img4} class="gallery__img" />
          </div>
          <div className="about-image-grid-5">
            <img src={img5} class="gallery__img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
