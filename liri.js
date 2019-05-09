// Read and set any environment variable with dotenv
require("dotenv").config();

// API Keys will be stored in this variable
var keys = require("./keys");
// Break down the above keys object and grab each API key
var spotifyKey = new Spotify(keys.spotify);
var omdbKey = new Omdb(keys.omdb);
var bitKey = new Bit(keys.bit);
