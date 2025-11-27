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
          href="https://www.facebook.com/leopoldina.lele.7"
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

      {/* Texto e links */}
      <p>© 2025 Sabores Caseiros. Todos os direitos reservados.</p>

      <div className="footer-links">
        <a
          href="/view/politica-privacidade.html"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Política de Privacidade
        </a>
        <span className="footer-separator"> | </span>
        <a
          href="https://www.livroreclamacoes.pt/Inicio/"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Livro de Reclamações
        </a>
      </div>
      <p
        style={{
          textAlign: "center",
          marginTop: "1rem",
          fontSize: "0.85rem",
          color: "#fff",
          opacity: 0.8,
        }}
      >
        Designed by Criartecôa, Lda
      </p>
    </footer>
  );
};

export default Footer;
