import React, { useEffect, useState } from "react";
import "./homepage.css";

const Homepage = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    // Como está na pasta public, o caminho começa em /view/...
    fetch("/view/homepage/homepage.html")
      .then((res) => res.text())
      .then((html) => setHtmlContent(html))
      .catch((err) => console.error("Erro ao carregar HTML:", err));
  }, []);

  return (
    <div
      className="homepage-section"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default Homepage;
