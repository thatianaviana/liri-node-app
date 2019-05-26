# LIRI Bot
LIRI Bot is a Language Interpretation and Recognition Interface. LIRI Bot is a command line node app that takes in parameters and gives you back data.

* Screenshot of all Liri Commands:
![Liri All Commands](/images/liri-all-commands.png)

## NPM Dependencies

* dotenv
* axios
* node-spotify-api
* request
* fs
* moment

## API Integration

* Bands in Town
* Spotify
* OMDB

## How to Use Liri

### Spotify
#### Type in the terminal: `node liri.js spotify-this-song <insert song title>`

* This will display the following info about the song to the terminal/bash window:
 * Artist Name
 * Song Title
 * Album Name
 * Preview link of the song from spotify
 * If no song is provided then the program will output information for the song "The Sign" by Ace of Base
![Spotify Command](/images/spotify.gif)

### Bands In Town
#### Type in the terminal: `node liri.js concert-this <insert artist name>`
* This will display the following info about the concerts to the terminal/bash window:
* Name of the venue
* Venue location
* Date of the Event (using date format as "MM/DD/YYYY") 
![Concert Command](/images/concert.gif)

### OMDB Movie Database

#### Type in the terminal: `node liri.js movie-this <insert movie name>`
* This will display the following info about the movie to the terminal/bash window:
* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.
![Movie Command](/images/movie.gif)


### Set Command
#### Type in the terminal: `node liri.js do-what-it-says`
* This will display information set on `random.txt` file to the terminal/bash window:
![Do What It Says Command](/images/dowhat.gif)

### These commands accept user input - below are the info I used for my HW submission:
* node liri.js spotify-this-song 'Waiting for Tonight'
* node liri.js movie-this 'Notting Hill'
* node liri.js concert-this 'Brandi Carlile'
