// Read and set any environment variable with dotenv
require("dotenv").config();

// Use the FileSystem of the server to pull from random.txt, use this for do-what-it-says
var fs = require("fs");

// Variable to import the functionality of the Spotify API call
var spotify = require("./spotify");

// Test that it imported correctly
console.log(spotify);
spotify.call("hello world");


// API Keys will be stored in this variable
var keys = require("./keys");
// Break down the above keys object and grab each API key
var spotifyKey = new Spotify(keys.spotify);
var omdbKey = new Omdb(keys.omdb);
var bitKey = new Bit(keys.bit);

// Create a variable to store one command from the CLI
var command = process.argv[2];
//Test for input? If (!'concert-this' || 'spotify-this-song' || 'movie-this' || 'do-what-it-says')
// Throw error, ask again?

// Create a variable to store the string that we want to pass to an API call
var liriThis = process.argv[3];

