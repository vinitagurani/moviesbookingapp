const express = require('express');
const router = express.Router();
const genres = require('../controllers/genre.controller');

// Retrieve all genres
router.get('/genres', genres.findAllGenres);

module.exports = router;
