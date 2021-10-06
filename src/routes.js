const {Router} = require('express')
const movieController = require('./controllers/movieController')

const routes = new Router()

routes.get('/popular', movieController.getPopular)
routes.get('/popular/details', movieController.getDetails)

module.exports = routes