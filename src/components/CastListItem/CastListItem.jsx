import PropTypes from 'prop-types';
import placeholder from 'film-poster-placeholder.png';

import { POSTER_BASE_PATH } from 'service/moviesAPI';
import CastItem from './CastItem.styled';

export const CastListItem = ({ avatar, name, role }) => {
  const src = avatar ? `${POSTER_BASE_PATH}${avatar}` : placeholder;
  return (
    <CastItem className="cast__item">
      <img className="cast__avatar" src={src} alt="User avatar" width="48" />
      <p className="cast__name">{name}</p>
      <span className="cast__role">{role}</span>
    </CastItem>
  );
};

CastListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  role: PropTypes.string.isRequired,
};
