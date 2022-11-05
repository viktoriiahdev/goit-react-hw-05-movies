import { CastList } from 'components/CastList/CastList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'service/moviesAPI';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getMovieCredits(movieId).then(response => {
      setCast(response.cast);
    });
  }, [movieId]);

  if (!cast) return null;

  return <CastList list={cast} />;
};

export default Cast;
