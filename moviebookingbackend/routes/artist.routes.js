const express = require('express');
const router = express.Router();
const artists = require('../controllers/artist.controller');

// Retrieve all artists
router.get('/artists', artists.findAllArtists);

module.exports = router;
