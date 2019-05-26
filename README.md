LIRI bot CI status
LIRI stands for Language Interpretation and Recognition Interface. LIRI bot is a command line node app that takes in parameters and returns data.

Screenshot of all Liri Commands:
![Liri All Commands](/images/liri-all-commands.png)

NPM Dependencies

dotenv
axios
node-spotify-api
request
fs
moment

API Integration

Bands in Town
Spotify
OMDB

Usage
The following commands run without user input:

$ node liri.js spotify-this-song
$ node liri.js concert-this
$ node liri.js movie-this
$ node liri.js do-what-it-says

These commands accept user input:
$ node liri.js spotify-this-song 'Waiting for Tonight'
$ node liri.js movie-this 'Notting Hill'
$ node liri.js concert-this 'Brandi Carlile'
