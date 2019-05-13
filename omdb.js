exports.call = (movie) => {
    // Bring in the axios module
    const axios = require("axios");

    // Bring in the logger
    const logger = require('./logger');

    // Get the key for the axios call
    var keys = require("./keys");
    const OMDBKey = keys.omdb.key;

    // Query url
    var queryURL = 'http://www.omdbapi.com/?apikey=' + OMDBKey + '&t=' + movie;

    //Make the call
    axios.get(queryURL).then(resp => {

        var title = "Title: " + resp.data.Title;
        var year = "Year Released: " + resp.data.Year;
        var imdb = "IMDB Rating: " + resp.data.imdbRating;
        var tomato = "Rotten Tomatoes Rating: " + resp.data.Ratings[1].Value;
        var country = "Produced in: " + resp.data.Country;
        var lang = "Language/Languages: " + resp.data.Language;
        var plot = "Plot: " + resp.data.Plot;
        var actors = "Actors: " + resp.data.Actors;

        var stringToLog = '\n' + title + '\n' + year + '\n' + imdb + '\n' + tomato + '\n' + country + '\n' + lang + '\n' + plot + '\n' + actors + '\n';

        console.log(stringToLog);
        logger.log(stringToLog);
    }).catch(err => {console.log(err)});
}