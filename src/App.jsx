import React from "react";
import "./App.css";
import logo from "./assets/images/logo.png";
import { Route, Routes } from "react-router-dom";
import Users from "./Components/Users/Users";
import Todos from "./Components/Todos/Todos";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={logo} alt="chari's logo" className="logo-img" height={80} />
        </header>
        <section>
          <Routes>
            <Route path="/" exact element={<Users />} />
            <Route path="/todos/:id" element={<Todos />} />
          </Routes>
        </section>
      </div>
    </div>
  );
}

export default App;
