import MovieBackground from 'components/MovieContainer/MovieBackground.styled';
import MovieContainer from 'components/MovieContainer/MovieContainer.styled';
import { useState } from 'react';
import { useEffect } from 'react';
import { Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovie, POSTER_BASE_PATH } from 'service/moviesAPI';
import placeholder from 'film-poster-placeholder.png';
import TabLink from 'components/MovieContainer/TabLink.styled';
import LinkBack from 'components/MovieContainer/LinkBack.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();

  useEffect(() => {
    document.body.classList.add('movie-page');

    return () => {
      document.body.classList.remove('movie-page');
    };
  }, []);

  useEffect(() => {
    getMovie(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return null;

  const { original_title, poster_path, backdrop_path, overview, tagline, genres } = movie;

  const backgroundImg = backdrop_path ? `${POSTER_BASE_PATH}${backdrop_path}` : placeholder;
  const posterImg = poster_path ? `${POSTER_BASE_PATH}${poster_path}` : placeholder;

  return (
    <>
      <MovieBackground bgImage={`url(${backgroundImg})`} />
      {location.state && location.state.from && (
        <LinkBack
          to={`${location.state.from.pathname}${location.state.from.search}`}
          state={{ from: location }}
          className="nav__back"
        >
          ← <span>Back</span>
        </LinkBack>
      )}
      <MovieContainer>
        <img src={posterImg} alt="" />
        <div className="movie__details">
          <div className="movie__genres">
            {genres.map(({ id, name }) => (
              <span key={id}>{name}</span>
            ))}
          </div>
          <h1 className="movie__title">{original_title}</h1>
          <span className="movie__tag">{tagline}</span>
          <div className="movie__overview">
            <p>{overview}</p>
          </div>
        </div>
        <div className="movie__additional">
          <nav>
            <TabLink to="cast" state={location.state ? { from: location.state.from } : null}>
              Cast
            </TabLink>
            <TabLink to="reviews" state={location.state ? { from: location.state.from } : null}>
              Reviews
            </TabLink>
          </nav>
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </MovieContainer>
    </>
  );
};

export default MovieDetails;
