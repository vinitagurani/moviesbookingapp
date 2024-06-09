const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  releaseDate: Date,
  genre: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre' },
  artist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artist' }],
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
