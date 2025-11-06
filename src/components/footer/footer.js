import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import filhoses from "../../assets/filhoses.jpg";
import "./footer.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${filhoses})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="footer-title">Tradição é sabor</h2>
      {/* Redes sociais */}
      <div className="social-icons">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF size={32} className="icon" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={32} className="icon" />
        </a>
      </div>

      {/* Texto e política */}
      <p>© 2025 Leopoldina Website. Todos os direitos reservados.</p>
      <a
        href="/view/politica-privacidade.html"
        className="footer-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Política de Privacidade
      </a>
    </footer>
  );
};

export default Footer;
