import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

const HomeScreen = () => (
  <Container className="mt-4">
    <Jumbotron>
      <h1>Welcome to MovieApp!</h1>
      <p>Discover movies tailored to your taste and save your favorites.</p>
    </Jumbotron>
  </Container>
);

export default HomeScreen;
