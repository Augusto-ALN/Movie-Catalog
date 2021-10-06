const {Router} = require('express')
const movieController = require('./controllers/movieController')

const routes = new Router()

routes.get('/details', movieController.getDetails)

module.exports = routes