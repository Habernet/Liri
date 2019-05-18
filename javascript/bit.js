exports.call = (artist) => {

    // Bring in the axios module
    const axios = require('axios');

    // Bring in the Keys module to get the ID
    const keys = require('./keys');
    const BITID = keys.bit.id;

    // Bring in Moment.js to format the date
    var moment = require('moment');

    // Bring in Chalk
    const chalk = require('chalk');
    const out = chalk.yellow.italic;

    // Bring in logger
    const logger = require('./logger');


    // Build the query URL for the axios call
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + BITID;

    // Make the call
    axios.get(queryURL).then(resp => {
        var arrayToLog = [];
        // Now we will format for displaying in the console
        for (let i = 0; i < resp.data.length; i++) {
            var band = "Band: " + resp.data[i].lineup;
            var venue = "Venue name: " + resp.data[i].venue.name;
            var city = "City: " + resp.data[i].venue.city;
            var date = "Date: " + moment(resp.data[i].datetime).format("DD:MM:YYYY:HH:MM");
            var website = "Website: " + resp.data[i].url;
            var stringToLog = '\n' + band + '\n' + venue + '\n' + city + '\n' + date + '\n' + website + '\n';
            // Log it out chalked
            console.log(out(stringToLog));
            // Push it out to main log object
            arrayToLog.push(stringToLog);
        }
        logger.log(arrayToLog);
    }).catch(err => { console.log("Liri can't find that band!") });
}
