import MoviesList from 'components/MoviesList/MoviesList';
import Searchbar from 'components/Searchbar/Searchbar';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'service/moviesAPI';

const Movies = () => {
  const [response, setResponse] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;

    searchMovies(query, 1).then(setResponse);
  }, [query]);

  const changeQuery = query => {
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <>
      <Searchbar value={query} onSubmit={changeQuery}></Searchbar>
      {response && <MoviesList movies={response.results} />}
    </>
  );
};

export default Movies;
