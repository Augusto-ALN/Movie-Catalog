require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())

app.get('/popular', async(req, res) => {
    try {
        const { data } = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
        return res.json(data)
    } catch (error) {
        console.error(error)
    }
})

app.listen(process.env.PORT)