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
            console.log(response.tracks.items[0].album.artists[0].name);
            console.log(song);
            console.log(response.tracks.items[0].external_urls.href);
            // console.log(response.tracks.items[0].album) CANT FIND ALBUM

            // Artist(s)
            // The song's name
            // A preview link of the song from Spotify
            // The album that the song is from

            // Store this information in an object that can also be written to log.txt
        })
        .catch((err) => {
            console.log(err);
        });
}