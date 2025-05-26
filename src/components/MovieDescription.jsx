
import { useParams, Link } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">
        <button style={{ marginTop: '20px' }}>⬅️ Back to Home</button>
      </Link>
    </div>
  );
};

export default MovieDescription;
