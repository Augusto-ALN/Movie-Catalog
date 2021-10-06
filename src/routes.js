const {Router} = require('express')
const {findPopularMovies} = require('./utils/findPopularMovies')

const routes = new Router()

routes.get('/popular', async(req, res) => {
    try {
        const popularMovieList = await findPopularMovies();
        return res.json(popularMovieList)
    } catch (error) {
        if (error.response) {
            return res.status(error.response.status).json(error.response.data.status_message)
        } else {
            return res.status(500).json('internal server error')
        }
    }
})

module.exports = routes