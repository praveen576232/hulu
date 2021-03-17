
export default{
    fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
     feachTopRated: `/movie/top_rated?api_keys=${process.env.REACT_APP_API_KEY}&language=en-US`,
     feachActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
     feachComedyMovies:`/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
     feachHororMovie:`/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
     feachRomanceMovie:`/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
     feachMistery:`/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=9648`,
     feachScifi :`/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=878`,
     feachWestern:`/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=37`,
     feachAnimation:`/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=16`,
     feachTv:`/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10770`,
};