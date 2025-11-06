import React, { useState, useEffect, useCallback, useRef } from "react";
import "./header.css";

const Header = () => {
  const [htmlContent, setHtmlContent] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  // 🔹 Lógica para esconder o header ao fazer scroll
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY <= lastScrollY);
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  // 🔹 Carrega o HTML do header
  useEffect(() => {
    fetch("/view/header/header.html")
      .then((res) => res.text())
      .then((html) => setHtmlContent(html))
      .catch((err) => console.error("Erro ao carregar HTML do header:", err));
  }, []);

  // 🔹 Eventos: scroll + clique
  useEffect(() => {
    if (!htmlContent || !headerRef.current) return;

    const container = headerRef.current;

    const handleMenuToggle = (e) => {
      const toggleBtn = e.target.closest(".menu-toggle");
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

    const handleScrollEvent = () => {
      handleScroll();
      setIsMenuOpen(false);
    };

    const handleClick = (e) => {
      handleMenuToggle(e);
      handleSectionScroll(e);
    };

    container.addEventListener("click", handleClick);
    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      container.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [htmlContent, handleScroll]);

  // 🔹 Renderização
  return (
    <div
      ref={headerRef}
      className={`header-wrapper ${isVisible ? "visible" : "hidden"} ${isMenuOpen ? "menu-open" : ""}`}
    >
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default Header;
