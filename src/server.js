require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')
const {findPopularMovies}  = require('./helpers/http')

app.use(cors())

app.get('/popular', async(req, res) => {
    try {
        const popularMovieList = await findPopularMovies();
        return res.json(popularMovieList)
    } catch (error) {
        console.error(error)
    }
})

app.listen(process.env.PORT)