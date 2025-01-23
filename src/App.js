import React from "react";
import "./App.css";
import "./components/header.css";
import "./components/maincontent.css";
import "./components/footer.css";
import Header from "./components/header";
import MainContent from "./components/maincontent";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;

