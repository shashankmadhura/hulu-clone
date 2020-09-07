import React from "react";
import "./Navbar.css";
import request from "../api/request";

const Navbar = ({ setSelectedOption }) => {
  return (
    <div className="navbar">
      <h2 onClick={() => setSelectedOption(request.fetchTrending)}>Trending</h2>
      <h2 onClick={() => setSelectedOption(request.fetchTopRated)}>
        Top Rated
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchActionMovies)}>
        Action
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchComedyMovies)}>
        Comedy
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchHorrorMovies)}>
        Horror
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchRomanceMovies)}>
        Romance
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchMystery)}>Mystery</h2>
      <h2 onClick={() => setSelectedOption(request.fetchSciFi)}>Sci-Fi</h2>
      <h2 onClick={() => setSelectedOption(request.fetchWestern)}>Western</h2>
      <h2 onClick={() => setSelectedOption(request.fetchAnimation)}>
        Animation
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchTV)}>TV Movie</h2>
    </div>
  );
};

export default Navbar;
