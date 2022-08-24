const key = 'be807db0788d521a1af79a6c555cec91'

const requests = {
   popularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
   nowPlaying:  `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default requests;