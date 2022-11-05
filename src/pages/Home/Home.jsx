import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect } from 'react';
import { useState } from 'react';
import { getWeekTrendMovies } from 'service/moviesAPI';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getWeekTrendMovies().then(setMovies);
  }, []);

  return (
    <>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
