import React, { forwardRef } from "react";
import "./MovieCard.css";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import TextTruncate from "react-text-truncate";

const BASE_URL = "https://image.tmdb.org/t/p/original/";

const MovieCard = forwardRef(({ movie }, ref) => {
  console.log(movie);
  return (
    <div ref={ref} className="moviecard">
      <img
        src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}`}
        alt="movie_poster"
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>

      <div className="moviecard__stats">
        <p>
          {movie.media_type && `${movie.media_type} • `}
          {movie.release_date || movie.first_air_date}
          <ThumbUpAltIcon /> {movie.vote_count}
        </p>
      </div>
    </div>
  );
});

export default MovieCard;
