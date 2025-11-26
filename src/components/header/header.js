import React, { useState, useEffect, useRef } from "react";
import "./header.css";

const Header = () => {
  const [htmlContent, setHtmlContent] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  // 🔹 Carrega o HTML do header
  useEffect(() => {
    fetch("/view/header/header.html")
      .then((res) => res.text())
      .then((html) => setHtmlContent(html))
      .catch((err) => console.error("Erro ao carregar HTML do header:", err));
  }, []);

  // 🔹 Eventos de clique (menu + scroll suave)
  useEffect(() => {
    if (!htmlContent || !headerRef.current) return;

    const container = headerRef.current;

    const handleMenuToggle = (e) => {
      const toggleBtn = e.target.closest(".menu-toggle, .menu-button");
      if (toggleBtn) {
        e.stopPropagation();
        setIsMenuOpen((prev) => !prev);
      }
    };

    const handleSectionScroll = (e) => {
      const iconBtn = e.target.closest(".icon-button");
      if (iconBtn) {
        const sectionId = iconBtn.getAttribute("data-section");
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setIsMenuOpen(false);
      }
    };

    const handleClick = (e) => {
      handleMenuToggle(e);
      handleSectionScroll(e);
    };

    container.addEventListener("click", handleClick);

    return () => {
      container.removeEventListener("click", handleClick);
    };
  }, [htmlContent]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    // Limpeza quando o componente desmontar (boa prática)
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  // 🔹 Renderização
  return (
    <div
      ref={headerRef}
      className={`header-wrapper ${isMenuOpen ? "menu-open" : ""}`}
    >
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default Header;
