require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const {findPopularMovies} = require('./utils/findPopularMovies')

app.use(cors())

app.get('/popular', async(req, res) => {
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

app.listen(process.env.PORT)