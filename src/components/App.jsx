import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import NavBar from './NavBar/NavBar.styled.jsx';
import NavItem from './NavBar/NavItem.styled.jsx';

const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

const Cast = lazy(() => import('./Cast/Cast.jsx'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const nav = [
  { href: '/', title: 'Home', end: true },
  { href: '/movies', title: 'Movies', end: false, className: 'search-page' },
];

export const App = () => {
  return (
    <>
      <NavBar>
        {nav.map(({ href, title, end, className = '' }) => {
          if (end)
            return (
              <NavItem key={href} to={href} end className={className}>
                {title}
              </NavItem>
            );
          return (
            <NavItem key={href} to={href} className={className}>
              {title}
            </NavItem>
          );
        })}
      </NavBar>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<h1>This page not found</h1>} />
        </Routes>
      </Suspense>
    </>
  );
};
