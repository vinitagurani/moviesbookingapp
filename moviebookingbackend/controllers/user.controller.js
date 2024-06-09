const uuid = require('uuidv4');
const tokenGenerator = require('uuid-token-generator');
const userDB = require('../models/user.model');

// Create a token generator with the default settings
const tokgen = new tokenGenerator();

exports.login = (req, res) => {
    const { username, password } = req.headers;
    // Here, you would verify the credentials against your database
    // Assuming successful authentication, generate a UUID and access token
    const userId = uuid();
    const accessToken = tokgen.generate();

    // Save the access token to the user's record in MongoDB
    // Update the user's record with the new access token
    userDB.updateOne({ username: username }, { accessToken: accessToken }, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        // If the user is not found, return an error
        if (!result) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ id: userId, 'access-token': accessToken });
    });
};

exports.signup = (req, res) => {
    // Implement signup logic here
};

exports.logout = (req, res) => {
    // Implement logout logic here
};
