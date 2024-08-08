import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="slogan">
        "La magia del aroma reside en su capacidad de transformar lo cotidiano
        en extraordinario, realzando tu presencia con un toque de sofisticación,
        encanto y elegancia."
      </p>
      <p className="slogan">|Parfum - Argentina</p>
      <div className="social-icons">
        <img src="/images/bxl-facebook.svg" alt="Facebook" />
        <img src="/images/bxl-github.svg" alt="GitHub" />
        <img src="/images/bxl-instagram.svg" alt="Instagram" />
        <img src="/images/bxl-whatsapp.svg" alt="WhatsApp" />
      </div>
      <p>&copy; 2024 Parfum. Todos los derechos reservados®.</p>
    </footer>
  );
};

export default Footer;
