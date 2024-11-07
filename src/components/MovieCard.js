import React from "react";
import { Card, Button } from "react-bootstrap";

const MovieCard = ({ movie }) => (
  <Card className="mb-3">
    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>{movie.overview.substring(0, 100)}...</Card.Text>
      <Button variant="primary">Add to Favorites</Button>
    </Card.Body>
  </Card>
);

export default MovieCard;
