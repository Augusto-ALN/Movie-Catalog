const {Router} = require('express')
const movieController = require('./controllers/movieController')

const routes = new Router()

routes.get('/popular', movieController.getPopular)

module.exports = routes