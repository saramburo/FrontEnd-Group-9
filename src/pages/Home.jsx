import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import bannerImage from "../assets/qui-nguyen-S6atLH5Rf0U-unsplash.jpg";

function Home() {
  return (
    <>
      <main>
        <img className="banner-image" src={bannerImage} />
        <div className="home-menu">
          <div className="home-menu-container">
            <div className="home-menu-subcontainer">
              <img
                className="home-menu-subcontainer-img"
                src="src\assets\jacek-dylag-P1djASp78Ss-unsplash.jpg"
                alt="copas de vino"
              />
            </div>
            <div className="home-menu-subcontainer">
              <h3 className="home-menu-subcontainer-text">BAR</h3>
            </div>
          </div>
          <div className="home-menu-container">
            <div className="home-menu-subcontainer">
              <h3 className="home-menu-subcontainer-text">COMIDA</h3>
            </div>
            <div className="home-menu-subcontainer">
              <img
                className="home-menu-subcontainer-img"
                src="src\assets\jacek-dylag-P1djASp78Ss-unsplash.jpg"
                alt="copas de vino"
              />
            </div>
          </div>
        </div>
        <div className="home-eventos"></div>
      </main>
    </>
  );
}

export default Home;
