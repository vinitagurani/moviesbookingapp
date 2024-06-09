const mongoose = require('mongoose');
const dbConfig = require('../config/db.config');

const Artist = require('./artist.model');
const Genre = require('./genre.model');
const Movie = require('./movie.model');
const User = require('./user.model');

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to the database!');
}).catch(err => {
  console.log('Cannot connect to the database!', err);
  process.exit();
});

const db = {
  mongoose: mongoose,
  artist: Artist,
  genre: Genre,
  movie: Movie,
  user: User,
};

module.exports = db;
