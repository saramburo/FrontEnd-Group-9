import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faThreads } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-subcontent">
            <h3 className="footer-text">SÍGUENOS</h3>
            <div className="footer-icon">
              <FontAwesomeIcon icon={faFacebook} className="icon-footer" />
              <FontAwesomeIcon icon={faInstagram} className="icon-footer" />
              <FontAwesomeIcon icon={faYoutube} className="icon-footer" />
              <FontAwesomeIcon icon={faThreads} className="icon-footer" />
              <FontAwesomeIcon icon={faXTwitter} className="icon-footer" />
            </div>
          </div>
          <div className="footer-subcontent">
            <h3 className="footer-text">TRABAJA CON NOSOTROS</h3>
          </div>
          <div className="footer-subcontent">
            <h3 className="footer-text">REGALA UNA INVITACIÓN</h3>
          </div>
        </div>
        <div className="footer-subcontent-min">
          <h3 className="footer-text-min">Términos y Condiciones</h3>
        </div>
      </footer>
    </>
  );
}

export default Footer;
