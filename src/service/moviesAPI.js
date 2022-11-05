const API_KEY = '77c0c1add79cf59c693f1478c702bef4';
const BASE_URL = 'https://api.themoviedb.org/3';

export function getWeekTrendMovies() {
  const url = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`;
  return fetch(url)
    .then(res => res.json())
    .then(json => json.results);
}

export async function getMovie(movieID) {
  const url = `${BASE_URL}/movie/${movieID}?api_key=${API_KEY}`;
  return fetch(url).then(res => res.json());
}

export function getMovieCredits(movieID) {
  const url = `${BASE_URL}/movie/${movieID}/credits?api_key=${API_KEY}`;
  return fetch(url).then(res => res.json());
}

export function getMovieReviews(movieID) {
  const url = `${BASE_URL}/movie/${movieID}/reviews?api_key=${API_KEY}`;
  return fetch(url).then(res => res.json());
}

export function searchMovies(query, page) {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;
  return fetch(url).then(res => res.json());
}

export const POSTER_BASE_PATH = 'https://image.tmdb.org/t/p/original/';
