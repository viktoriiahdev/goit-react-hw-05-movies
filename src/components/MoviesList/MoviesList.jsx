import PropTypes from 'prop-types';

import MovieCard from 'components/MovieCard/MovieCard';
import Grid from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <Grid>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Grid>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      release_date: PropTypes.string.isRequired,
    })
  ),
};
