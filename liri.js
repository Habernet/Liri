// Read and set any environment variable with dotenv
require("dotenv").config();
// Use the FileSystem of the server to pull from random.txt, use this for do-what-it-says
// const fs = require("fs");

// Variable to import the functionality of the spotify.js
// const spotify = require("./spotify");
// Test that it imported correctly
// spotify.call("Hello");

// Variable to import the functionality of the OMDB API call
// const omdb = require("./omdb");
// Test that it imported correctly
// omdb.call("Matrix");

//Variable to import the functionality  of the BIT API call
const bit = require("./bit");
// Test that it imported correctly
// console.log(bit);
bit.call("Tool");


// Create a variable to store one command from the CLI
// var command = process.argv[2];
//Test for input? If (!'concert-this' || 'spotify-this-song' || 'movie-this' || 'do-what-it-says')
// Throw error, ask again?

// Create a variable to store the string that we want to pass to an API call
// var liriThis = process.argv[3];



//TO DO
// 3. Write main logic to gather input, test for commands and execute the write calls accordingly.