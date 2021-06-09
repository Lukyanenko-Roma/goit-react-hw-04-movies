import axios from "axios";
const  AUTH_KEY = "4620f5aaffc0c6688f1656cc6b3fc05c";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export default class ApiService {
  getTradingMovies() {
    return axios
      .get(`/trending/all/week?api_key=${AUTH_KEY}`)
      .then((response) => response.data.results);
  }

  getMoviesOnSearch(query) {
    return axios
      .get(`/search/movie?api_key=${AUTH_KEY}&query=${query}`)
      .then((response) => response.data.results);
  }
  getMovieById(movieId) {
    return axios
      .get(`/movie/${movieId}?api_key=${AUTH_KEY}`)
      .then((response) => response.data);
  }
  getMovieCredits(movieId) {
    return axios
      .get(`/movie/${movieId}/credits?api_key=${AUTH_KEY}`)
      .then((response) => response.data.cast);
  }
  getMovieReviews(movieId) {
    return axios
      .get(`/movie/${movieId}/reviews?api_key=${AUTH_KEY}`)
      .then((response) => response.data.results);
  }
}