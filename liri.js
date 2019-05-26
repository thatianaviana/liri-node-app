
// DEPENDENCIES
require("dotenv").config();
// Import the node-spotify-api NPM package.
var Spotify = require("node-spotify-api");
// Import the API keys
var keys = require("./keys.js");
//moment to adjust the date for concerts
var moment = require("moment");
moment().format();
var axios = require("axios");
// Import the FS package for read/write/append.
var fs = require("fs");

// Command variable will take argument 
//commandOne is for the commands for the liri
var commandOne = process.argv[2];
//commandTwo is for the user inpunt for artist, movie, band
var commandTwo = process.argv[3];



// functions/API call for OMDB
var movieThis = function (movie) {
    // Default: "Mr. Nobody"
    if (movie === undefined) {
        movie = "Mr.+Nobody"
        console.log("-----------------------");
        console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
        console.log("It's on Netflix!");
    } //not sure how to make this work - tried not adding any movie but nothing came out
    var dataArr = process.argv[3].split(" ");
    var movieName = dataArr.join("+");

    // Then run a request with axios to the OMDB API with the desired  movie
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    // Then create a request with axios to the queryUrl
    axios.get(queryUrl)

        .then(
            function (response) {
                // * Title of the movie:
                console.log("The movie's name is: " + response.data.Title);
                // * IMDB Rating of the movie:
                console.log("The movie's rating is: " + response.data.imdbRating);
                // * Year the movie came out:
                console.log("The movie's Year Release is: " + response.data.Year);
                // * Rotten Tomatoes Rating of the movie:
                console.log("The movie's Rotten Tomatoes Rating is: " + response.data.Ratings[1].Value);
                // * Country where the movie was produced:
                console.log("Country Where Movie Was Produced is: " + response.data.Country);
                // * Language of the movie:
                console.log("Language of the Movie is: " + response.data.Language);
                // * Plot of the movie:
                console.log("Plot of the Movie is: " + response.data.Plot);
                // * Actors in the movie:
                console.log("Actors in the Movies are: " + response.data.Actors);

            })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
        });
}



// function/API call for Spotify SPOTIFY ONLY SHOWING THE DEFAULT SONG
var spotifyWho = function (songName) {
    //Default song: "The Sign" by Ace of Base
    if (songName === undefined) {
        songName = "The Sign Ace of Base";
    }
    // Initialize the spotify API client with keys
    var spotify = new Spotify(keys.spotify);
    spotify.search(
        {
            type: "track",
            query: songName,
            limit: 1
        },
        function (err, data) {
            if (err) {
                console.log("Error occurred: " + err);
                return;
            }
            var songs = data.tracks.items;
            for (var i = 0; i < songs.length; i++) {
                console.log(i);
                console.log("Artist name: " + songs[i].artists[0].name);
                console.log("Song title: " + songs[i].name);
                console.log("Album: " + songs[i].album.name);
                console.log("Preview song: " + songs[i].preview_url);
                console.log("----------------------------------------------------");
            }
        }
    );
};


//Function/API call for Bands in Town
var concertWho = function (artist) {

    // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    axios.get(queryURL)
      
    .then(function (response) {

        // Printing the entire object to console
     
        for (var i = 0; i < response.data.length; i++){
            console.log("Name of the Venue: " + response.data[i].venue.name);
            console.log("Venue Location: " + response.data[i].venue.city);
            console.log("Data of the Event: " + moment(response.data[i].datetime).format("MM/DD/YYYY"));


        }
    })
}
// Function to take data from .txt file and send to another function when we enter "do-what-it-says"
var doWhat = function () {
    fs.readFile('random.txt', 'utf8', function (error, data) {
        console.log(data);
        var dataArr = data.split(',');
        if (dataArr.length === 2) {
            console.log(dataArr)
           if (dataArr[0] === "spotify-this-song"){
            spotifyWho(dataArr[1]);
           }
           else if (dataArr[0] === "movie-this"){
            movieThis(dataArr[1]);

           }
           else if (dataArr[0] === "concert-this"){
            concertWho(dataArr[1]);
           }
         
        } 
    });
};

//Switch command so that users can type their commands on terminal
//choose which statement (commandOne) to switch to and execute
switch (commandOne) {

    case "spotify-this-song":
        spotifyWho(commandTwo);
        break;

    case "movie-this":
        movieThis(commandTwo);
        break;

    case "concert-this":
        concertWho(commandTwo);
        break;

    case "do-what-it-says":
        doWhat();
        break;

    default:
        console.log("WRONG: please type in command again.");
        break;
}

