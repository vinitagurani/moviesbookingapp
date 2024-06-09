const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: String,
  birthdate: Date,
  nationality: String,
});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;
