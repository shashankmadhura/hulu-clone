import React, { useState, useEffect } from "react";
import "./Results.css";
import MovieCard from "../MovieCard/MovieCard";
import axios from "../api/axios";
import FlipMove from "react-flip-move";

const Results = ({ selectedOption }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await axios.get(selectedOption);
      setMovies(movies.data.results);
      return movies;
    };

    fetchMovies();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
};

export default Results;
