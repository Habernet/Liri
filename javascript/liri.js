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

//Backstreet Boys
var doThis = () => {
    fs.readFile('../random.txt', 'utf-8', (err, data) => {
        if(err) {
            console.log(err);
        }
        spotify.call(data);
    })
}

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
            doThis();
            break;
    };
});

//TO DO
// 1. Validate with expect: typeof?
// 4. DO SOMETHING DIFFERENT WITH ERRORS.
