# Liri
A Siri like CLI app that responds to the commands "concert-this", "spotify-this-song", "movie-this", and "do-what-it-says".

## Motivation
This project was created as a learning platform for node.js and a few node modules! The project started very simply and as more knowledge was available, the project expanded to what you see it as now!


## Tech/framework used
This project is powered by Node.js!
#### NPM packages:
1. [dotenv -- for securing vital information](https://www.npmjs.com/package/dotenv "dotenv")

2. node-spotify-api -- for working with the Spotify API

3. [axios -- for working with OMDB API and Bands in Town API](https://www.npmjs.com/package/axios "axios")

4. [inquirer -- for interfacing with the user/ gathering input](https://www.npmjs.com/package/inquirer "inquirer")


5. [moment -- for dealing with timestamping logs and formatting dates (API output)](https://www.npmjs.com/package/moment "moment")

6. [chalk -- for making things look good!](https://www.npmjs.com/package/chalk "chalk")

## Features
Instead of using process.argv to capture command line arguments, I opted for Inquirer! Inquirer is a npm package that will prompt the user for input.

Something else besides is Chalk! Chalk is simply something to make everything in the console look nicer. There can be some functionality to it as well. For example prompts will stand out more than an average line of text, and your options will also be styled different to the prompt.

One of my favorite features has to do with security! Listed under dependencies is a packaged called "dotenv". This allows us to save important information in environment variables locally. This is much more secure than pushing to Github for everyone to see! However it requires just a bit of work to get working; this is detailed below.

## Installation
Make sure you have node.js installed!
1. Clone the repo to your machine :computer:
```
    git clone https://github.com/Habernet/Liri.git
```
<img src="./assets/gitclone.gif">
2. Create a .env file and store your API keys/ ID's and Secrets here with the following format:
```
    # Spotify API ID and Secret (as required by Spotify)

    SPOTIFY_ID=yourIDhere
    SPOTIFY_SECRET=yoursecrethere

    # OMDB API key
    OMDB_KEY=yourkeyhere

    # BIT API ID
    BIT_ID=yourIDhere
```
:heavy_exclamation_mark: NOTE: You will have to get your own keys for each of the above! :heavy_exclamation_mark:

3. Create a .gitignore file and list the files you do not want pushed to github here :octocat: :
```
    node_modules
    .DS_Store
    .env
    log.txt
```
4. Install NPM modules:
    Because these are already listed in the node dependencies (package.json), you can run the following:
```
npm i
```
<img src="./assets/npmi.gif">

5. Verify you have the modules installed by looking at the node_modules folder :open_file_folder:



## How to use?
<h3>Once installed properly you can do the following!</h3>
`node liri.js`
<img src="./assets/node-liri.gif">
`movie-this`
<img src="./assets/movie-this.gif">
`spotify-this-song`
<img src="./assets/spotify-this.gif">
`concert-this`
<img src="./assets/concert-this.gif">

NOTE: All data returned will be logged out to log.txt in your javascript folder! :memo: :arrow_right: :open_file_folder: 


## Contribute
Anyone can contribute as this is an open repo! :unlock: However pull requests are managed by Patrick Haberern.

## Credits :mortar_board:
Credits are due to Trilogy Education and their Coding BootCamp at UNC. They gave me the inspiration to not just do the minimum and to push myself to learn  new technologies!
Special thanks to Jason Schmitt who provided numerous resources for achieving the end goal.

# My GitHub
:link: https://github.com/Habernet

## License

MIT © [Patrick Haberern]()