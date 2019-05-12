// Read and set any environment variable with dotenv
require("dotenv").config();

// Use the FileSystem of the server to pull from random.txt, use this for do-what-it-says
const fs = require("fs");
// Variable to import the functionality of the spotify.js
const spotify = require("./spotify");
// Variable to import the functionality of the OMDB API call
const omdb = require("./omdb");
//Variable to import the functionality  of the BIT API call
const bit = require("./bit");


// Create a variable to store the command from the CLI
var command = process.argv[2];
// Create a variable to store the string that we want to pass to an API call
var liriThis = process.argv[3];


// Main logic
// Test to make sure input is correct
// Make API calls based on the filtered input

// if (command !== 'concert-this' || 'spotify-this-song' || 'movie-this' || 'do-what-it-says') {
//     console.log("Liri only reads commands: 'concert-this', 'spotify-this-song', 'movie-this', and 'do-what-it-says'! Please try again.")
// }


switch (command) {
    case 'concert-this':
        bit.call(liriThis);
        break;
    case 'spotify-this-song':
        spotify.call(liriThis);
        break;
    case 'movie-this':
        omdb.call(liriThis);
        break;
    case 'do-what-it-says':
        // Still needs to be written
        break;
}

//TO DO
// 1. Write main logic to gather input, test for commands and execute the right calls accordingly.
// 2. Take a look at the Spotify call..return needs to be better? Returns objects that I can't see.
// 3. Account for multiple word movies and bands
// 4. JSON.stringify?