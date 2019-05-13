exports.call = (song) => {
    // Bring in the logger
    const logger = require('./logger');

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
        .search({ type: 'track', query: song })
        .then((response) => {
            var artist = 'Artist: ' + response.tracks.items[0].album.artists[0].name;
            var song = 'Song: ' + song //undefined
            var url = 'Preview: ' + response.tracks.items[0].external_urls.href; // undefined
            // console.log(response.tracks.items[0].album) CANT FIND ALBUM
            var stringToLog = '\n' + artist + '\n' + song + '\n' + url + '\n';
            console.log(stringToLog);
            logger.log(stringToLog);

            // Artist(s)
            // The song's name
            // A preview link of the song from Spotify
            // The album that the song is from
        })
        .catch((err) => {
            console.log(err);
        });
}