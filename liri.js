// Read and set any environment variable with dotenv
require("dotenv").config();

const fs = require("fs"); // Filesystem
const spotify = require("./spotify"); // Spotify package
const omdb = require("./omdb"); // OMDB package
const bit = require("./bit"); // Bands in Town Package
const inquirer = require("inquirer"); // Inquirer package
// Bring in Chalk
const chalk = require('chalk');
const out = chalk.green.inverse.bold;
const choice = chalk.green;

// Ask user for band, make a call
var concertThis = () => {
    let concertQuestion = {
        type: 'input',
        name: 'concert',
        message: out('What band do you want to search for? '),
        validate: (name) => {
            return name !== '';
        }
    };

    inquirer.prompt(concertQuestion).then(answer => {
        bit.call(answer.concert);
    });
};

// Ask user for song, make a call
var spotifyThis = () => {
    let spotifyQuestion = {
        type: 'input',
        name: 'spotify',
        message: out('What song do you want to search for? '),
        default: 'The Sign Ace of Base'
    };

    inquirer.prompt(spotifyQuestion).then(answer => {
        spotify.call(answer.spotify);
    });
};

// Ask user for movie, make a call
var movieThis = () => {
    let movieQuestion = {
        type: 'input',
        name: 'movie',
        message: out('What movie are you looking for? '),
        default: 'Mr. Nobody'
    };

    inquirer.prompt(movieQuestion).then(answer => {
        omdb.call(answer.movie);
    });
};

// First question on run
let question = {
    type: 'list',
    name: 'command',
    message: out('What would you like Liri to do? (arrow keys + enter to select)'),
    choices: [choice('movie-this'), choice('spotify-this-song'), choice('concert-this'), choice('do-what-it-says')]
}

// Decide what to do based on answer to first question
inquirer.prompt(question).then(answers => {
    switch (answers.command) {
        case choice('concert-this'):
            concertThis(); ``
            break;
        case choice('spotify-this-song'):
            spotifyThis();
            break;
        case choice('movie-this'):
            movieThis();
            break;
        case choice('do-what-it-says'):
            // Instead of prompting..it will the other file's main function, which will pull random
            break;
    };
});

//TO DO
// CHALK!
// 1. Validate with expect: typeof?
// 2. something weird is happening with log..promises maybe? Still works.
// 3. Pull in from random.txt for the do-what-it-says bit
// 5. README!
// 7. DO SOMETHING DIFFERENT WITH ERRORS.
// 8. Finalize BIT returned data (how many ?)

// Might have to fake the below? Using inquirer 
// `node liri.js do-what-it-says`
// Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
// Edit the text in random.txt to test out the feature for movie-this and concert-this.