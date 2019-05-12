exports.call = (movie) => {
    // Bring in the axios module
    const axios = require("axios");

    // Get the key for the axios call
    var keys = require("./keys");
    const OMDBKey = keys.omdb.key;

    // Query url
    var queryURL = 'http://www.omdbapi.com/?apikey=' + OMDBKey + '&t=' + movie;

    //Make the call
    axios.get(queryURL).then(resp => {
        // * Title of the movie.
        // * Year the movie came out.
        // * IMDB Rating of the movie.
        // * Rotten Tomatoes Rating of the movie.
        // * Country where the movie was produced.
        // * Language of the movie.
        // * Plot of the movie.
        // * Actors in the movie.
        console.log("Title: ", resp.data.Title);
        console.log("Year Released: ", resp.data.Year);
        console.log("IMDB Rating: ", resp.data.imdbRating);
        console.log("Rotten Tomatoes Rating: ", resp.data.Ratings[1].Value);
        console.log("Produced in: ", resp.data.Country);
        console.log("Language/Languages: ", resp.data.Language);
        console.log("Plot: ", resp.data.Plot);
        console.log("Actors: ", resp.data.Actors);
    }).catch(err => {console.log(err)});
}