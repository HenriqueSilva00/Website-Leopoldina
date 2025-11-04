import React, { useEffect, useState } from "react";

const History = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch("/view/history/history.html")
      .then((res) => res.text())
      .then((html) => setHtmlContent(html))
      .catch((err) => console.error("Erro ao carregar HTML da História:", err));
  }, []);

  return (
    <div
      className="history-section"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default History;
