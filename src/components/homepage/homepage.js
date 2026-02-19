import React, { useEffect, useState } from "react";
import "./homepage.css";

const Homepage = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    // Carrega HTML externo
    fetch("/view/homepage/homepage.html")
      .then((res) => res.text())
      .then((html) => setHtmlContent(html))
      .catch((err) => console.error("Erro ao carregar HTML:", err));
  }, []);

  // Função para controlar abrir/fechar apenas no mobile
  useEffect(() => {
    const handleMobileOverlay = () => {
      if (window.innerWidth > 768) return; // só mobile

      const wrappers = document.querySelectorAll(".image-wrapper");

      wrappers.forEach((wrapper) => {
        const arrow = wrapper.querySelector(".arrow-down");
        if (!arrow) return;

        arrow.addEventListener("click", () => {
          const isActive = wrapper.classList.contains("active");

          // Fecha todos os outros
          wrappers.forEach((w) => w.classList.remove("active"));

          // Se não estava aberto, abre o clicado
          if (!isActive) {
            wrapper.classList.add("active");
          }
        });
      });
    };

    handleMobileOverlay();

    // Reexecuta caso a janela seja redimensionada
    window.addEventListener("resize", handleMobileOverlay);
    return () => window.removeEventListener("resize", handleMobileOverlay);
  }, [htmlContent]);

  return (
    <div
      className="homepage-section"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default Homepage;
