exports.call = (artist) => {

    // Bring in the axios module
    const axios = require('axios');

    // Bring in the Keys module to get the ID
    const keys = require('./keys');
    const BITID = keys.bit.id;

    // Bring in Moment.js to format the date NOT WORKING YET
    // var moment = require('moment');

    // var date = moment('2019-10-03T19:00:29', 'MM-DD-YYYY');
    // console.log(date);

    // Bring in logger
    const logger = require('./logger');


    // Build the query URL for the axios call
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + BITID;

    // Make the call
    axios.get(queryURL).then(resp => {
        // Now we will format for displaying in the console
        for (let i = 0; i < 2; i++) {
            // Store this information in an object that can also be written to log.txt
            var venue = "Venue name: " + resp.data[i].venue.name;
            var city = "City: " + resp.data[i].venue.city;
            var date = "Date: " + resp.data[i].datetime;
            var website = "Website: " + resp.data[i].url;
            var stringToLog = '\n' + venue + '\n' + city + '\n' + date + '\n' + website + '\n'
            console.log(stringToLog);
            logger.log(stringToLog);
        }
    }).catch(err => { console.log(err) });
}
