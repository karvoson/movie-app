import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "../components/MovieCard";

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([]);

  // Logic to add/remove movies from favorites

  return (
    <Container className="mt-4">
      <h2>Your Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet!</p>
      ) : (
        <Row>
          {favorites.map((movie) => (
            <Col key={movie.id} sm={12} md={6} lg={4} xl={3}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default FavoritesScreen;
