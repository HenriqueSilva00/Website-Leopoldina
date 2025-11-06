import React, { useEffect, useState } from "react";
import "./contacts.css";

const Contacts = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch("/view/contacts/contacts.html")
      .then((res) => res.text())
      .then((html) => setHtmlContent(html))
      .catch((err) =>
        console.error("Erro ao carregar HTML dos Contactos:", err)
      );
  }, []);

  return (
    <div className="contact-wrapper">
      {/* HTML carregado dinamicamente */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default Contacts;
