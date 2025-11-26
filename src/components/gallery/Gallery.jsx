import React, { useState } from "react";
import "./Gallery.css";

const images = [
  {
    id: 1,
    src: "/assets/fotosGaleria/filhoses2.jpg",
    alt: "Filhós com açúcar e canela",
    description:
      "Filhós caseiras polvilhadas com açúcar e canela, uma delícia que abraça a tradição.",
  },
  {
    id: 2,
    src: "/assets/fotosGaleria/amendoas.jpg",
    alt: "Amêndoas torradas",
    description:
      "Amêndoas crocantes, torradas na medida certa, perfeitas para um snack saudável e saboroso.",
  },
  {
    id: 3,
    src: "/assets/fotosGaleria/boloestendido.jpg",
    alt: "Bolo caseiro",
    description:
      "Bolo caseiro artesanal, feito com ingredientes locais, fofinho e cheio de sabor.",
  },
  {
    id: 4,
    src: "/assets/fotosGaleria/castanhas.jpg",
    alt: "Castanhas assadas",
    description:
      "Castanhas assadas, o sabor do outono, quentinhas e irresistíveis.",
  },
  {
    id: 5,
    src: "/assets/fotosGaleria/Centeio.jpg",
    alt: "Pão tradicional",
    description:
      "Pão tradicional, com crosta estaladiça e miolo macio, feito em forno de lenha.",
  },
  {
    id: 6,
    src: "/assets/fotosGaleria/avelas.jpg",
    alt: "Avelãs crocantes",
    description:
      "Avelãs selecionadas, perfeitas para lanches ou receitas caseiras.",
  },
  {
    id: 7,
    src: "/assets/fotosGaleria/Centeio3.jpg",
    alt: "Bolos tradicionais",
    description:
      "Variedade de bolos típicos, doces e tentadores, para todos os momentos.",
  },
  {
    id: 8,
    src: "/assets/fotosGaleria/nozes.jpg",
    alt: "Nozes frescas",
    description: "Nozes frescas, crocantes, cheias de sabor e energia natural.",
  },
  {
    id: 9,
    src: "/assets/fotosGaleria/centeio.jpg",
    alt: "Pão de centeio",
    description:
      "Pão de centeio feito à mão, aroma e sabor que nos levam à tradição.",
  },
  {
    id: 10,
    src: "/assets/fotosGaleria/figossecos2.jpg",
    alt: "Figos secos",
    description:
      "Figos secos ao sol, doces naturais, perfeitos para acompanhar um chá ou café.",
  },
  {
    id: 11,
    src: "/assets/fotosGaleria/filhoses.jpg",
    alt: "Filhós douradas",
    description:
      "Filhós douradas e estaladiças, típicas das festas tradicionais, irresistíveis.",
  },
  {
    id: 12,
    src: "/assets/fotosGaleria/boloestendido2.jpg",
    alt: "Bolo caseiro estendido",
    description:
      "Bolo estendido artesanal, com sabor intenso e textura delicada.",
  },
  {
    id: 13,
    src: "/assets/fotosGaleria/centeio2.jpg",
    alt: "Pão de centeio artesanal",
    description:
      "Tradição em cada fatia de pão de centeio, amassado e cozido com amor.",
  },
  {
    id: 14,
    src: "/assets/fotosGaleria/bolaAzeite.jpg",
    alt: "Bola de azeite",
    description:
      "Bola de azeite caseira, dourada e macia, um prazer que não se esquece.",
  },
  {
    id: 15,
    src: "/assets/fotosGaleria/carqueija.jpg",
    alt: "Carqueja",
    description:
      "Erva carqueja, tradicional e aromática, perfeita para infusões relaxantes.",
  },
  {
    id: 16,
    src: "/assets/fotosGaleria/tarteMaca.jpg",
    alt: "Tarte de maçã",
    description:
      "Tarte de maçã fresca, com massa crocante e recheio suculento, irresistível.",
  },
  {
    id: 17,
    src: "/assets/fotosGaleria/bolaChourico.jpg",
    alt: "Bola de chouriço",
    description:
      "Bola de chouriço tradicional, suculenta e cheia de sabor, perfeita para partilhar.",
  },
  {
    id: 18,
    src: "/assets/fotosGaleria/bolinhos.jpg",
    alt: "Bolinhos doces",
    description:
      "Bolinhos caseiros, pequenos pedaços de felicidade e tradição.",
  },
  {
    id: 19,
    src: "/assets/fotosGaleria/boloCanela.jpg",
    alt: "Bolo de canela",
    description:
      "Bolo aromático de canela, fofo e cheio de sabor, perfeito para qualquer ocasião.",
  },
  {
    id: 20,
    src: "/assets/fotosGaleria/mel.jpg",
    alt: "Mel natural",
    description:
      "Mel puro, dourado e doce, um toque de natureza e energia em cada colher.",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = (e) => {
    if (e.target.classList.contains("modal")) {
      setSelectedImage(null);
    }
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h2>Sabores da Nossa Terra</h2>
        <p>
          Uma viagem pelos aromas e tradições da região — pão quente, bolos
          caseiros, frutos secos e delícias que guardam o sabor de casa.
        </p>
      </div>

      <div className="gallery-grid">
        {images.map((img) => (
          <div
            key={img.id}
            className="gallery-item"
            onClick={() => setSelectedImage(img)}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="modal-image"
            />
            {selectedImage.description && (
              <p className="modal-description">{selectedImage.description}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
