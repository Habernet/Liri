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
        // Store this information in an object that can also be written to log.txt
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