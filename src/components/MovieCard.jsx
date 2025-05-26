
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  
  <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
    <h2>{movie.title}</h2>
    <img src={movie.posterURL} alt={movie.title} width="200" />
    <p>{movie.description}</p>
    <p>⭐ {movie.rating}</p>
  </div>
);

export default MovieCard;
