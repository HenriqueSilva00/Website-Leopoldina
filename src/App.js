import React, { useState, useEffect } from "react";
import "./App.css";
import "./components/header/header.css";
import "./components/gallery/Gallery.css";
import "./components/homepage/homepage.css";
import "./components/history/history.css";
import "./components/contacts/contacts.css";

import Header from "./components/header/header";
import Homepage from "./components/homepage/homepage";
import History from "./components/history/history";
import Gallery from "./components/gallery/Gallery";
import Contacts from "./components/contacts/contacts";
import Footer from "./components/footer/footer";

const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Mostra seta apenas quando o scroll passa de 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      <Header />

      <main>
        <section id="home" className="section homepage">
          <Homepage />
        </section>

        <section id="history" className="section history">
          <History />
        </section>

        <section id="gallery" className="section gallery">
          <Gallery />
        </section>

        <section className="fullWidthBanner">
          <img src="/assets/Espigas.png" alt="Banner contactos" />
        </section>

        <section id="contacts" className="section contacts">
          <Contacts />
        </section>
      </main>

      <Footer />

      <button
        className={`scrollToTop ${showScroll ? "show" : ""}`}
        onClick={scrollToTop}
      >
        ↑
      </button>

      <a
        href="https://wa.me/351966967750?text=Olá,%20quero%20mais%20informações"
        target="_blank"
        rel="noopener noreferrer"
        className={`whatsapp-button ${showScroll ? "show" : ""}`}
      >
        <img src="/assets/whatsappicon.png" alt="WhatsApp" />
      </a>
    </div>
  );
};

export default App;
