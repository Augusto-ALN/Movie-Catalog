const {Router} = require('express')
const movieController = require('./controllers/movieController')

const routes = new Router()

routes.get('/movies/popular', movieController.getPopular)
routes.get('/movies/details/:id', movieController.getDetails)

module.exports = routes