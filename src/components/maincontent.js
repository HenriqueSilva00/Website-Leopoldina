import React from "react";
import { Carousel } from "react-carousel-minimal"; // Exemplo de carrossel
import image1 from "../assets/montanha.jpeg";
import image2 from "../assets/rio.jpg";
import image3 from "../assets/lago.jpg";

const MainContent = () => {
  const data = [
    {
      image: image1,
      caption: "1º Foto",
    },
    {
      image: image2,
      caption: "2º Foto",
    },
    {
      image: image3,
      caption: "3º Foto",
    },
  ];

  return (
    <main>
      <section id="home" className="section section1">
        <h2>Secção 1</h2>
        <p>Conteúdo da primeira secção.</p>
      </section>

      <section id="history" className="section section2">
        <div className="carousel-container">
          <h1 className="carousel-title">Galeria de Fotos</h1>
          <div className="carousel-wrapper">
            <Carousel
              data={data}
              time={2000}
              width="100%"
              height="100%"
              captionStyle={{
                fontSize: "2em",
                fontWeight: "bold",
                color: "#fff",
              }}
              radius="10px"
              captionPosition="bottom"
              automatic={false}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="80px"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"
            />
          </div>
        </div>
      </section>

      <section id="contacts" className="section section3">
        <h2>Secção 3</h2>
        <p>Conteúdo da terceira secção.</p>
      </section>
    </main>
  );
};

export default MainContent;
