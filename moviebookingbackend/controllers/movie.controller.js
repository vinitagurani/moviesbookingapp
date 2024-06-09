const db = require('../models');
const Movie = db.movie;
const Show = db.show; // Assuming there is a Show model for show details

// Find all movies, optionally filtered by status
exports.findAllMovies = (req, res) => {
  const { status, title, genres, artists, start_date, end_date } = req.query;
  let query = {};

  if (status) query.status = status;
  if (title) query.title = { $regex: title, $options: 'i' };
  if (genres) query.genres = { $in: genres.split(',') };
  if (artists) query.artists = { $in: artists.split(',') };
  if (start_date && end_date) query.releaseDate = { $gte: new Date(start_date), $lte: new Date(end_date) };

  Movie.find(query)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving movies.'
      });
    });
};

// Find a single movie by ID
exports.findOne = (req, res) => {
  const id = req.params.movieId;

  Movie.findById(id)
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: `Movie not found with id ${id}`
        });
      }
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error retrieving movie with id ${id}`
      });
    });
};

// Find shows for a specific movie by ID
exports.findShows = (req, res) => {
  const id = req.params.movieId;

  Show.find({ movie: id })
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: `Shows not found for movie with id ${id}`
        });
      }
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error retrieving shows for movie with id ${id}`
      });
    });
};
