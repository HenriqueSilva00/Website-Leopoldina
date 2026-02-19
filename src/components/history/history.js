import React, { useState, useEffect, useRef, useCallback } from "react";
import Hammer from "hammerjs";

const History = () => {
  const timelineRef = useRef(null);
  const firstItemRef = useRef(null);
  const lastItemRef = useRef(null);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const xScrolling = 280;

  // Atualiza estado das setas
  const updateArrows = () => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const transformX = timeline.style.transform
      ? parseInt(
          timeline.style.transform.replace(/translateX\((-?\d+)px\)/, "$1")
        )
      : 0;

    // se transform = 0 → início
    setCanScrollPrev(transformX < 0);

    // se transform + largura visível >= conteúdo → fim
    const timelineWidth = timeline.offsetWidth;
    const totalWidth = timeline.scrollWidth;
    setCanScrollNext(Math.abs(transformX) + timelineWidth < totalWidth);
  };

  const scrollTimeline = useCallback((direction) => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const timelineWidth = timeline.offsetWidth;
    const totalWidth = timeline.scrollWidth;

    const maxTranslate = 0; // início
    const minTranslate = -(totalWidth - timelineWidth); // fim

    const currentTransform = timeline.style.transform
      ? parseInt(
          timeline.style.transform.replace(/translateX\((-?\d+)px\)/, "$1")
        )
      : 0;

    const move = direction === "prev" ? xScrolling : -xScrolling;

    let newTranslate = currentTransform + move;

    // 🔒 CLAMP
    if (newTranslate > maxTranslate) newTranslate = maxTranslate;
    if (newTranslate < minTranslate) newTranslate = minTranslate;

    timeline.style.transition = "transform 0.6s ease";
    timeline.style.transform = `translateX(${newTranslate}px)`;

    setTimeout(updateArrows, 600);
  }, []);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    // Define alturas iguais
    const elH = timeline.querySelectorAll("li > div");
    let maxHeight = 0;
    elH.forEach((el) => {
      if (el.offsetHeight > maxHeight) maxHeight = el.offsetHeight;
    });
    elH.forEach((el) => (el.style.height = `${maxHeight}px`));

    // Inicial: scroll no início
    timeline.style.transform = "translateX(0px)";
    setCanScrollPrev(false); // início: não pode voltar
    setCanScrollNext(timeline.scrollWidth > timeline.offsetWidth);

    // Swipe
    const hammer = new Hammer(timeline);
    hammer.on("swipeleft", () => scrollTimeline("next"));
    hammer.on("swiperight", () => scrollTimeline("prev"));

    // Teclado
    const keyFn = (e) => {
      if (e.key === "ArrowLeft") scrollTimeline("prev");
      if (e.key === "ArrowRight") scrollTimeline("next");
    };
    document.addEventListener("keydown", keyFn);

    return () => {
      document.removeEventListener("keydown", keyFn);
      hammer.destroy();
    };
  }, [scrollTimeline]);

  return (
    <section className="timeline">
      <div className="timeline-header">
        <h2>A Nossa Jornada de Sabores</h2>
        <p>
          Desde 2015, a participar nos eventos regionais e a dar a provar os
          sabores caseiros do Sabugal
        </p>
      </div>
      <ol ref={timelineRef}>
        <li ref={firstItemRef}>
          <div>
            <time>2015</time> Abertura da padaria "Leopoldina Sabores Caseiros"
            no Sabugal.
          </div>
        </li>
        <li>
          <div>
            <time>2016</time> Participação no evento S. João do Sabugal.
          </div>
        </li>
        <li>
          <div>
            <time>2017</time> Presença na feira "Muralhas com História" em
            Sortelha.
          </div>
        </li>
        <li>
          <div>
            <time>2018</time> Participação na exposição de Presépios do Sabugal.
          </div>
        </li>
        <li>
          <div>
            <time>2019</time> Presença em festas regionais e mercados locais.
          </div>
        </li>
        <li>
          <div>
            <time>2020</time> Fixação da padaria no Mercado Municipal do
            Sabugal.
          </div>
        </li>
        <li>
          <div>
            <time>2021</time> Participação na Festa das Quintas de São
            Bartolomeu.
          </div>
        </li>
        <li>
          <div>
            <time>2022</time> Continuação da presença em eventos regionais.
          </div>
        </li>
        <li>
          <div>
            <time>2023</time> Expansão de produtos e divulgação da marca na
            região.
          </div>
        </li>
        <li>
          <div>
            <time>2024</time> Reconhecimento local pela qualidade e tradição dos
            produtos.
          </div>
        </li>
        <li className="last">
          <div></div>
        </li>
        <li className="last" ref={lastItemRef}>
          <div></div>
        </li>
      </ol>

      <div className="arrows">
        <button
          className="arrow arrow__prev"
          disabled={!canScrollPrev}
          onClick={() => scrollTimeline("prev")}
        >
          <span className="arrow-icon">&#8592;</span>
        </button>
        <button
          className="arrow arrow__next"
          disabled={!canScrollNext}
          onClick={() => scrollTimeline("next")}
        >
          <span className="arrow-icon">&#8594;</span>
        </button>
      </div>
    </section>
  );
};

export default History;
