import React from "react";
import "./App.css";
import logo from "./assets/images/logo.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={logo} alt="chari's logo" className="logo-img" height={80} />
        </header>
        <section>
          App Body
        </section>
      </div>
    </div>
  );
}

export default App;
