const {findMovieDetails} = require('../utils/findMovieDetails');
const {findPopularMovies} = require('../utils/findPopularMovies')

module.exports = {
    async getPopular(req, res){
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
        },
    async getDetails(req, res){
            try {
                const id = req.params.id
                const selectedMovieDetails = await findMovieDetails(id);
                return res.json(selectedMovieDetails)
            } catch (error) {
                if (error.response) {
                    return res.status(error.response.status).json(error.response.data.status_message)
                } else {
                    return res.status(500).json('internal server error')
                }
            }
        }
    }