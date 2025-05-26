
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import { Route, Routes } from 'react-router-dom';
import MovieDescription from './components/MovieDescription';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan.',
      posterURL: 'https://m.media-amazon.com/images/I/51zUbui+gbL.jpg',
      rating: 9,
      trailer: 'https://www.youtube.com/embed/YoHD9XEInc0'
    },
    {
      id: 2,
      title: 'The Matrix',
      description: 'Sci-fi action classic.',
      posterURL: 'https://m.media-amazon.com/images/I/51EG732BV3L.jpg',
      rating: 8.5,
      trailer: 'https://www.youtube.com/embed/vKQi3bBA1y8'
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
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} />
                <AddMovie onAddMovie={handleAddMovie} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          
          <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
          
        </Routes>

      </div>
    
  );
}

export default App;
