import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa"; // Importa os ícones

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Leopoldina Website. Todos os direitos reservados.</p>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF size={32} className="icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={32} className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
