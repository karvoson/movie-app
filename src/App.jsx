import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import RecommendationsScreen from "./screens/RecommendationsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import Navbar from "/Users/sonjakarvonen/movie-app/src/components/navBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/recommendations" element={<RecommendationsScreen />} />
        <Route path="/favorites" element={<FavoritesScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
