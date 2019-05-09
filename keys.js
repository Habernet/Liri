console.log('Keys.js Loaded.');
// Export the Spotify key that is stored on the environment variable
exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
// Export the OMDB key that is stored on the environment variable
exports.omdb = {
  key: process.env.OMDB_KEY
};
// Export the Bands In Town key that is stored on the environment variable
exports.bit = {

};