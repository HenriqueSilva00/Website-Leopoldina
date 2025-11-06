import React, { useState } from "react";
import "./Gallery.css";

const images = [
  {
    id: 1,
    src: "/assets/fotosGaleria/amendoas.jpg",
    alt: "Amêndoas",
    description: "Amêndoas torradas, símbolo da doçura tradicional.",
  },
  {
    id: 2,
    src: "/assets/fotosGaleria/avelas.jpg",
    alt: "Avelãs",
    description: "Avelãs crocantes colhidas com carinho da região.",
  },
  {
    id: 3,
    src: "/assets/fotosGaleria/boloestendido.jpg",
    alt: "Bolo caseiro",
    description: "Bolo caseiro artesanal, feito com ingredientes locais.",
  },
  {
    id: 4,
    src: "/assets/fotosGaleria/bolos1.jpg",
    alt: "Bolos tradicionais",
    description: "Variedade de bolos típicos, perfeitos para qualquer ocasião.",
  },
  {
    id: 5,
    src: "/assets/fotosGaleria/carqueija.jpg",
    alt: "Carqueija",
    description: "Erva carqueja, conhecida pelas suas propriedades naturais.",
  },
  {
    id: 6,
    src: "/assets/fotosGaleria/castanhas.jpg",
    alt: "Castanhas",
    description: "Castanhas assadas, um sabor outonal inconfundível.",
  },
  {
    id: 7,
    src: "/assets/fotosGaleria/centeio.jpg",
    alt: "Pão de centeio",
    description: "Pão de centeio feito em forno de lenha, de sabor intenso.",
  },
  {
    id: 8,
    src: "/assets/fotosGaleria/centeio2.jpg",
    alt: "Pão de centeio artesanal",
    description: "Tradição no forno, pão de centeio amassado à mão.",
  },
  {
    id: 9,
    src: "/assets/fotosGaleria/chacidreira.jpg",
    alt: "Chá de cidreira",
    description: "Chá de cidreira seco naturalmente, ideal para relaxar.",
  },
  {
    id: 10,
    src: "/assets/fotosGaleria/erva1.jpg",
    alt: "Ervas aromáticas",
    description: "Mistura de ervas aromáticas usadas nas receitas regionais.",
  },
  {
    id: 11,
    src: "/assets/fotosGaleria/erva2.jpg",
    alt: "Ervas naturais",
    description: "Seleção de ervas secas cuidadosamente preparadas.",
  },
  {
    id: 12,
    src: "/assets/fotosGaleria/figossecos.jpg",
    alt: "Figos secos",
    description: "Figos secos ao sol, um doce natural cheio de energia.",
  },
  {
    id: 13,
    src: "/assets/fotosGaleria/figossecos2.jpg",
    alt: "Figos tradicionais",
    description: "Figos secos tradicionais, preparados com saber antigo.",
  },
  {
    id: 14,
    src: "/assets/fotosGaleria/filhoses.jpg",
    alt: "Filhós",
    description: "Filhós douradas, doces típicos das festas tradicionais.",
  },
  {
    id: 15,
    src: "/assets/fotosGaleria/florlaranjeira.jpg",
    alt: "Flor de laranjeira",
    description: "Flor de laranjeira, aroma suave das terras do interior.",
  },
  {
    id: 16,
    src: "/assets/fotosGaleria/nozes.jpg",
    alt: "Nozes",
    description: "Nozes frescas, colhidas nas quintas da região.",
  },
  {
    id: 17,
    src: "/assets/fotosGaleria/pao2.jpg",
    alt: "Pão tradicional",
    description: "Pão tradicional com crosta estaladiça e miolo macio.",
  },
  {
    id: 18,
    src: "/assets/fotosGaleria/pao3.jpg",
    alt: "Pão caseiro",
    description: "Pão caseiro cozido em forno de lenha, sabor de antigamente.",
  },
  {
    id: 19,
    src: "/assets/fotosGaleria/polen.jpg",
    alt: "Pólen natural",
    description: "Pólen apícola, um superalimento cheio de vitalidade.",
  },
  {
    id: 20,
    src: "/assets/fotosGaleria/filhoses2.jpg",
    alt: "Filhós caseiras",
    description: "Filhós caseiras polvilhadas com açúcar e canela.",
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
