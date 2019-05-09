exports.call = (artist) => {
    console.log(artist);
    console.log("This was imported properly!");
    // The above test worked...This is where I will write code to make the omdb call with axios.

    // Bring in the axios module
    const axios = require('axios');
    
    // Bring in the Keys module to get the ID
    const keys = require('./keys');
    const BITID = keys.bit.id;
    console.log('BIT_ID', BITID);

    // Build the query URL for the axios call
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + BITID;

    // Make the call
    axios.get(queryURL).then(resp => {
        console.log('It worked!', resp.data);
    });
}