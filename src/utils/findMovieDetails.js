const axios = require('axios').default

module.exports.findMovieDetails = async (id) => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`)
    const movieDetail = {
        title: data.title,
        poster_path: data.poster_path,
        overview: data.overview,
        vote_average: data.vote_average,
        release_date: data.release_date,
        genres: data.genres
    }
    return movieDetail
}