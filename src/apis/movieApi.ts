//https://developers.themoviedb.org/3/movies/get-movie-details
// /movie/latest 최신작

// /movie/upcoming 개봉예정작

// GET /movie/now_playing 현재상영작

// GET /movie/top_rated

// import axiosInstance from './index';

// //최신작
// export const latestApi = () => axiosInstance.get('/movie/latest');

// //개봉예정작
// export const upcomingApi = () => axiosInstance.get('/movie/upcoming');

// //현재 상영중인 영화
// export const nowPlayingApi = () => axiosInstance.get('/movie/now_playing');

// //인기있는 영화
// export const topRatedApi = () => axiosInstance.get('/movie/top_rated');

// //인기 있는 영화
// export const popularApi = () => axiosInstance.get('/movie/popular');

// export const detailApi = (movieId: string) =>
//   axiosInstance.get('/movie/${movieId}');
// export const similarApi = (movieId: string) =>
//   axiosInstance.get('/movie/${movieId}/similar');

// export const searchApi = (query: string) =>
//   axiosInstance.get(`/sarch/movie/query=${query}`);

import axiosInstance from './index';

export const latestApi = () => axiosInstance.get('/movie/latest');

export const upcomingApi = () => axiosInstance.get('/movie/upcoming');

export const nowPlayingApi = () => axiosInstance.get('/movie/now_playing');

export const topRatedApi = () => axiosInstance.get('/movie/top_rated');

export const popularApi = () => axiosInstance.get('/movie/popular');

export const detailApi = (movieId: string) =>
  axiosInstance.get(`/movie/${movieId}`);

export const similarApi = (id: string) =>
  axiosInstance.get(`/movie/${id}/similar`);

export const searchApi = (query: string) =>
  axiosInstance.get(`/search/movie?query=${query}`);
