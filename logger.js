// Bring in moment.js for a timestamp
const moment = require('moment');

// this will take in data and write it to log.txt
exports.log = (data) => {
    // require the fs to do this
    const fs = require('fs');

    // write a new line with a timestamp from moment.js
    let now = new moment().format("MM:DD:YYYY:HH:mm");
    let timeStamp = '\n\n' + '----------' + now +'----------' + '\n\n';
    fs.appendFile('log.txt', timeStamp, (err) => {
        if (err){
            console.log(err);
        }
    });

    // write the data received
    fs.appendFile('log.txt', data, (err) => { 
        if(err) {
            console.log(err);
        };
        console.log("Data was logged successfully.");
    });
};
