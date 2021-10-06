const axios = require('axios').default

module.exports.findPopularMovies = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
    const catalog = data.results.map(movie => {
        return {
            id: movie.id,
            release_date: movie.release_date,
            title: movie.title,
            poster_path: movie.poster_path
        }
    })
    return catalog
}