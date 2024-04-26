import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import bannerImage from "../assets/qui-nguyen-S6atLH5Rf0U-unsplash.jpg";
import img1 from "../assets/jacek-dylag-P1djASp78Ss-unsplash.jpg";
import img2 from "../assets/thomas-tucker-MNtag_eXMKw-unsplash.jpg";
import img3 from "../assets/pexels-razane-adra-13215204.jpg";
import img4 from "../assets/pexels-maria-orlova-4947565.jpg";
import img5 from "../assets/pexels-ruslan-alekso-1928131.jpg";
import img6 from "../assets/pexels-wendy-wei-1943411.jpg";
function Home() {
  return (
    <>
      <main>
        <img className="banner-image" src={bannerImage} />
        <div className="home-eventos">
          <p className="text-homepage">
            Eventos únicos cada día, desde jazz a electrónica. Sumérgete en un
            ambiente moderno y vibrante. ¡Ven y vive experiencias que
            trascienden lo común!
          </p>
        </div>
        <div className="home-menu">
          <div className="home-menu-container">
            <div className="home-menu-subcontainer">
              <img
                className="home-menu-subcontainer-img"
                src={img1}
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
                src={img2}
                alt="comida"
              />
            </div>
          </div>
        </div>
        <div className="home-eventos">
          <p className="text-homepage">
            Únete a nosotros en nuestro bar para noches llenas de música en
            vivo, cócteles creativos y ambiente vibrante. Descubre una
            experiencia única con amigos y buena compañía. ¡Te esperamos!
          </p>
        </div>
        <div className="event-grid-container">
          <div className="event-image-grid">
            <div className="event-image-grid-1">
              <img src={img3} class="gallery__img" />
            </div>
            <div className="event-image-grid-1">
              <img src={img4} class="gallery__img" />
            </div>
            <div className="event-image-grid-1">
              <img src={img5} class="gallery__img" />
            </div>
            <div className="event-image-grid-1">
              <img src={img6} className="gallery__img" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
