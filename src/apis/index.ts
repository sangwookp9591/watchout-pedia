import axios from 'axios';

const axiosInstance = axios.create({
  //https://api.themoviedb.org/3/
  baseURL: `${process.env.REACT_APP_API_HOST}/${process.env.REACT_APP_API_VERSION}`,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: 'ko-KR',
  },
});

export default axiosInstance;
