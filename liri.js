// Read and set any environment variable with dotenv
require("dotenv").config();

const fs = require("fs"); // Filesystem
const spotify = require("./spotify"); // Spotify package
const omdb = require("./omdb"); // OMDB package
const bit = require("./bit"); // Bands in Town Package
const inquirer = require("inquirer"); // Load the inquirer


// Function to log everything out
var writeLog = function () {
    // Use FS to write to log.txt every output
}


var concertThis = () => {
    let concertQuestion = {
        type: 'input',
        name: 'concert',
        message: 'What band do you want to search for? '
    };

    inquirer.prompt(concertQuestion).then(answer => {
        bit.call(answer.concert);
    });
};

var spotifyThis = () => {
    let spotifyQuestion = {
        type: 'input',
        name: 'spotify',
        message: 'What song do you want to search for? '
    };

    inquirer.prompt(spotifyQuestion).then(answer => {
        spotify.call(answer.spotify);
    });
};

var movieThis = () => {
    let movieQuestion = {
        type: 'input',
        name: 'movie',
        message: 'What movie are you looking for? '
    };

    inquirer.prompt(movieQuestion).then(answer => {
        omdb.call(answer.movie);
    });
};

let question = {
    type: 'list',
    name: 'command',
    message: 'What would you like Liri to do? (arrow keys + enter to select)',
    choices: ['movie-this', 'spotify-this-song', 'concert-this']
}


inquirer.prompt(question).then(answers => {
    switch (answers.command) {
        case 'concert-this':
            concertThis(); ``
            break;
        case 'spotify-this-song':
            spotifyThis();
            break;
        case 'movie-this':
            movieThis();
            break;
        case 'do-what-it-says':
            // Still needs to be written
            break;
    };
});




//TO DO
// 2. Log output to log.txt
// 3. Pull in from random.txt for the do-what-it-says bit
// 4. Format the date on BIT using moment.js
// 5. README!
// 6. Errors and format output of some of the API's
