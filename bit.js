exports.call = (artist) => {

    // Bring in the axios module
    const axios = require('axios');
    
    // Bring in the Keys module to get the ID
    const keys = require('./keys');
    const BITID = keys.bit.id;

    // Build the query URL for the axios call
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + BITID;

    // Make the call
    axios.get(queryURL).then(resp => {
        // Now we will format for displaying in the console
        for (let i = 0; i < 2; i++) {
            console.log("Venue name: ", resp.data[i].venue.name);
            console.log("City: ", resp.data[i].venue.city);
            console.log("Date: ", resp.data[i].datetime);
            console.log("Website: ", resp.data[i].url, '\n');
        }
        // Catch errors!
    });
}