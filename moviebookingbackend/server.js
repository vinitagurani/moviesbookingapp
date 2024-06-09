const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./app/models');
const movieRoutes = require('./app/routes/movie.routes');
const userRoutes = require('./app/routes/user.routes');
const artistRoutes = require('./app/routes/artist.routes');
const genreRoutes = require('./app/routes/genre.routes');

// Create an Express app object
const app = express();

// Set the PORT number
const PORT = process.env.PORT || 3000;

// Load CORS middleware
app.use(cors());

// Parse requests of content-type - application/json
app.use(bodyParser.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes for movies, users, artists, and genres
app.use('/api', movieRoutes);
app.use('/api', userRoutes);
app.use('/api', artistRoutes);
app.use('/api', genreRoutes);

// Define route for the root URL
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to your Express API!' });
});

// Set up a catch-all route for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: 'Resource not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
