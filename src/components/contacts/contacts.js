import React, { useEffect, useState } from "react";

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
    <div
      className="contacts-section"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default Contacts;
