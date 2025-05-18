//  const Api_key = process.env.REACT_APP_API_Key;
// const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const Api_key= import.meta.env.VITE_REACT_APP_API_key;
console.log(Api_key)
const requests = {
  fetchTrending: `/trending/all/day?api_key=${Api_key}&language=en-US`,
  fetchNetflixOriginals:`/discover/tv?api_key=${Api_key}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${Api_key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${Api_key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${Api_key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${Api_key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${Api_key}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${Api_key}&with_genres=99`,
  fetchTvShow: `tv/popular?api_key=${Api_key}&language=en-US&page=1`,
};

export default requests;
