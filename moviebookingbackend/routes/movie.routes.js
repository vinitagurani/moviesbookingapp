const express = require('express');
const router = express.Router();
const movies = require('../controllers/movie.controller');

// Retrieve all movies, optionally filtered by status
router.get('/movies', movies.findAllMovies);

// Retrieve a single movie by ID
router.get('/movies/:movieId', movies.findOne);

// Retrieve shows for a specific movie by ID
router.get('/movies/:movieId/shows', movies.findShows);

module.exports = router;
