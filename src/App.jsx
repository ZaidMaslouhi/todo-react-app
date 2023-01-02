import React from "react";
import { Route, Routes } from "react-router-dom";
import Todos from "./Components/Todos/Todos";
import Users from "./Components/Users/Users";
import NotFound from "./Components/404/NotFound";
import logo from "./assets/images/logo.png";
import { Body, Container, Header, Section } from "./App.styles";

function App() {
  return (
    <Body>
      <Container>
        <Header>
          <img src={logo} alt="chari's logo" className="logo-img" />
        </Header>
        <Section>
          <Routes>
            <Route path="/" exact element={<Users />} />
            <Route path="/todos/:id" element={<Todos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Section>
      </Container>
    </Body>
  );
}

export default App;
