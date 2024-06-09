const db = require('../models');
const Genre = db.genre;

// Retrieve all genres
exports.findAllGenres = (req, res) => {
  Genre.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving genres.'
      });
    });
};
