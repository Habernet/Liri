exports.call = (song) => {
    // Bring in the logger
    const logger = require('./logger');

    // Bring in Chalk
    const chalk = require('chalk');
    const out = chalk.green.italic;

    // Bring in the id and secret for the call
    const spotifyInfo = require("./keys");
    var spotifyID = spotifyInfo.spotify.id;
    var spotifySecret = spotifyInfo.spotify.secret;

    // Use the node-spotify-api to make a call
    var SpotifyNode = require('node-spotify-api');
    var spotify = new SpotifyNode({
        id: spotifyID,
        secret: spotifySecret
    })

    spotify
        .search({ type: 'track', query: song, limit: 1})
        .then((resp) => {
            var resp = resp.tracks.items[0];
            var artist = 'Artist: ' + resp.artists[0].name;
            var song = 'Song: ' + resp.name;
            var url = 'Preview: ' + resp.external_urls.spotify;
            var album = 'Album: ' + resp.album.name;
            var stringToLog = '\n' + artist + '\n' + song + '\n' + url + '\n' + album + '\n';
            console.log(out(stringToLog));
            logger.log(stringToLog);
        })
        .catch((err) => {
            console.log("Liri can't find that song!");
        });
}