
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  
   <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <h2>{movie.title}</h2>
      <img src={movie.posterURL} alt={movie.title} width="200" />
      <p> ⭐{movie.rating}</p>
    </Link>
  </div>
);

export default MovieCard;
