const { Movie } = require('../models')

class MovieRepository {
    static async getAll() {
        try {
            return await Movie.findAll();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = MovieRepository