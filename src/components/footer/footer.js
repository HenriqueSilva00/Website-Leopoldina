import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import filhoses from "../../assets/filhoses.jpg"; // ✅ importa a imagem
import "./footer.css"; // garante que o estilo está separado

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${filhoses})`, // 🔹 Fundo com opacidade
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <p>© 2025 Leopoldina Website. Todos os direitos reservados.</p>
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
    </footer>
  );
};

export default Footer;
