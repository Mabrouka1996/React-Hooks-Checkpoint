// App.js
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';


function App() {
  const [movies, setMovies] = useState([
    {
      
      title: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan.',
      posterURL: 'https://m.media-amazon.com/images/I/51zUbui+gbL.jpg',
      rating: 9,
      
    },
    {
      
      title: 'The Matrix',
      description: 'Sci-fi action classic.',
      posterURL: 'https://m.media-amazon.com/images/I/51EG732BV3L.jpg',
      rating: 8.5,
    
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState(0);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= rateFilter
  );

  return (
    <div className="App">
      <h1>🎬 My Movie App</h1>
      <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} />
      <AddMovie onAddMovie={handleAddMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
