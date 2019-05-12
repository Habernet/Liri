exports.call = (movie) => {
    console.log(movie);
    console.log("This was imported properly!");

    // Bring in the axios module
    const axios = require("axios");

    // Get the key for the axios call
    var keys = require("./keys");
    const OMDBKey = keys.omdb.key;
    console.log("Key: ", OMDBKey);

    // Query url
    var queryURL = 'http://www.omdbapi.com/?apikey=' + OMDBKey + '&t=' + movie;

    //Make the call
    axios.get(queryURL).then(resp => {
        console.log("It worked!", resp.data);
        // Now we will format for displaying in the console
        // Catch errors!
    }).catch(err => {console.log(err)});
}