import PropTypes from 'prop-types';

import ReviewItem from './ReviewItem.styled';

const Review = ({ review }) => {
  const { content, updated_at, author } = review;

  const date = new Date(updated_at);
  return (
    <ReviewItem>
      <p className="review__author">{author}</p>
      <span className="review__date">{date.toLocaleDateString()}</span>
      <p className="review__text">{content}</p>
    </ReviewItem>
  );
};

export default Review;

Review.propTypes = {
  review: PropTypes.shape({
    content: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }),
};
