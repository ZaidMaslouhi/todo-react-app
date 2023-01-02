import React from "react";
import logo from "./assets/images/logo.png";
import Users from "./Components/Users/Users";
import Todos from "./Components/Todos/Todos";
import { Body, Container, Header, Section } from "./App.styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./Components/404/NotFound";

function App() {
  return (
    <Body>
      <Container>
        <Header>
          <img src={logo} alt="chari's logo" className="logo-img" height={80} />
        </Header>
        <Section>
          <Router>
            <Routes>
              <Route path="/" exact element={<Users />} />
              <Route path="/todos/:id" element={<Todos />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </Section>
      </Container>
    </Body>
  );
}

export default App;
