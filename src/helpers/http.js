const axios = require('axios')

module.exports.findPopularMovies = async () => {
    const { data } = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
    return data
}