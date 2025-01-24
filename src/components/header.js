import React, { useState, useEffect, useCallback } from "react";
import { FaHome, FaBook, FaBars, FaPhone } from "react-icons/fa";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Memoriza a função handleScroll para evitar recriação em cada renderização
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsVisible(false); // Esconde o header
    } else {
      setIsVisible(true); // Mostra o header
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]); // Dependência de lastScrollY

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]); // Adicione handleScroll como dependência

  return (
    <header className={`header ${isVisible ? "visible" : "hidden"}`}>
      <div className="title_container">
        <h1 className="title">Leopoldina Website</h1>
      </div>
      <div className={`icon_container ${isMenuOpen ? "open" : ""}`}>
        <button className="icon-button" onClick={() => scrollToSection("home")}>
          <FaHome size={28} /> {/* Ícone de Home */}
        </button>
        <button
          className="icon-button"
          onClick={() => scrollToSection("history")}
        >
          <FaBook size={28} /> {/* Ícone de Search */}
        </button>
        <button
          className="icon-button"
          onClick={() => scrollToSection("contacts")}
        >
          <FaPhone size={28} /> {/* Ícone de User */}
        </button>
      </div>
      <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <button>
          <FaBars size={28} /> {/* Ícone de Menu */}
        </button>
      </div>
    </header>
  );
};

export default Header;
