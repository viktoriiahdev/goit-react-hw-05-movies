import PropTypes from 'prop-types';

import { CastListItem } from 'components/CastListItem/CastListItem';
import Cast from './CastList.styled';

export const CastList = ({ list }) => {
  return (
    <Cast>
      {list.map(({ id, name, profile_path, character }) => (
        <CastListItem key={id} avatar={profile_path} name={name} role={character} />
      ))}
    </Cast>
  );
};

CastList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
    })
  ),
};
