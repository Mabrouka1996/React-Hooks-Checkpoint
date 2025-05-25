
import React, { useState } from 'react';

const AddMovie = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { title, description, posterURL, rating: Number(rating) };
    onAddMovie(newMovie);
    // Reset form
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <input value={posterURL} onChange={(e) => setPosterURL(e.target.value)} placeholder="Poster URL" required />
      <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating" min="0" max="10" required />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
