import Review from 'components/Review/Review';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/moviesAPI';
import ReviewsList from './ReviewsList.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId).then(response => setReviews(response.results));
  }, [movieId]);

  if (!reviews) return;

  if (reviews.length > 0)
    return (
      <>
        <ReviewsList>
          {reviews.map(review => (
            <Review key={review.id} review={review} />
          ))}
        </ReviewsList>
      </>
    );
  else
    return (
      <>
        <ReviewsList>
          <p>No reviews!</p>
        </ReviewsList>
      </>
    );
};

export default Reviews;
