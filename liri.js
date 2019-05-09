// Read and set any environment variable with dotenv
require("dotenv").config();
// Use the FileSystem of the server to pull from random.txt, use this for do-what-it-says
var fs = require("fs");

// API Keys will be stored in this variable
var keys = require("./keys");
// Break down the above keys object and grab each API key
const spotifyKey = new SpotifyStuff(keys.spotify);
const omdbKey = new OmdbStuff(keys.omdb);
const bitKey = new BitStuff(keys.bit);

// Variable to import the functionality of the Spotify API call
var spotify = require("./spotify");
// Test that it imported correctly
console.log(spotify);
spotify.call("Hello world!");

// Variable to import the functionality of the OMDB API call
var omdb = require("./omdb");
// Test that it imported correctly
console.log(omdb);
omdb.call("Hello world!")

//Variable to import the functionality  of the BIT API call
var bit = require("./bit");
// Test that it imported correctly
console.log(bit);
bit.call("Hello world!");


// Create a variable to store one command from the CLI
var command = process.argv[2];
//Test for input? If (!'concert-this' || 'spotify-this-song' || 'movie-this' || 'do-what-it-says')
// Throw error, ask again?

// Create a variable to store the string that we want to pass to an API call
var liriThis = process.argv[3];



//TO DO
// 1. Get keys and store them in the .env so dotenv can use them
// 2. Create omdb.js and bit.js and test imports