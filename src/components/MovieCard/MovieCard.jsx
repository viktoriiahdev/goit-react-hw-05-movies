import PropTypes from 'prop-types';

import { POSTER_BASE_PATH } from 'service/moviesAPI';
import { NavLink, useLocation } from 'react-router-dom';
import GridItem from './MovieCard.styled';

import placeholder from 'film-poster-placeholder.png';

const MovieCard = ({ movie }) => {
  const { id, title, poster_path, vote_average, release_date } = movie;
  const location = useLocation();

  let labelClass = `card__label--bad`;
  if (!vote_average) labelClass = `card__label--undefined`;
  if (parseFloat(vote_average) > 3.5) labelClass = `card__label--middle`;
  if (parseFloat(vote_average) > 7) labelClass = `card__label--high`;

  const img_src = poster_path ? `${POSTER_BASE_PATH}${poster_path}` : placeholder;
  // : 'http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png';
  return (
    <GridItem>
      <NavLink to={`/movies/${id}`} className="card__poster-link" state={{ from: location }}>
        <div className="card__poster-wrapper">
          <img src={img_src} alt={title} />
        </div>
        <span className={`card__label ${labelClass}`}>{vote_average}</span>
      </NavLink>
      <div className="card__info">
        <span className="card__year">{release_date}</span>
        <NavLink to={`/movies/${movie.id}`} className="card__title" state={{ from: location }}>
          {title}
        </NavLink>
      </div>
    </GridItem>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
  }),
};
