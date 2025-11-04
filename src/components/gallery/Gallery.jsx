import React, { useEffect, useState } from "react";

import "./Gallery.css"; // CSS específico da galeria

const Gallery = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch("/view/gallery/gallery.html")
      .then((res) => res.text())
      .then((data) => setHtmlContent(data))
      .catch((err) => console.error("Erro ao carregar galeria:", err));
  }, []);

  return (
    <section id="gallery" className="section gallery">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </section>
  );
};

export default Gallery;
