exports.call = (song) => {

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
            console.log('It worked!', response);
            // Here we will display in console
        })
        .catch((err) => {
            console.log(err);
        });
}