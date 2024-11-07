import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "../components/MovieCard";

const RecommendationsScreen = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = process.env.VITE_TMDB_API_KEY;
    const fetchMovies = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
      setMovies(response.data.results);
    };
    fetchMovies();
  }, []);

  return (
    <Container className="mt-4">
      <h2>Recommended Movies</h2>
      <Row>
        {movies.map((movie) => (
          <Col key={movie.id} sm={12} md={6} lg={4} xl={3}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RecommendationsScreen;
