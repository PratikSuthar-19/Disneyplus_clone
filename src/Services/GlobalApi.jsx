import axios from "axios";

const movieBaseURL = "https://api.themoviedb.org/3";
 const api_key = '39013d3ae1e70d1798b725a8abcf0a13';
 const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

 const getTrendingVideo = axios.get(movieBaseURL+"/trending/all/day?api_key="+api_key);
 const getMovieByGenreId=(id)=>
 axios.get(movieByGenreBaseURL+"&with_genres="+id)
 export default {
    getTrendingVideo,
    getMovieByGenreId
 }