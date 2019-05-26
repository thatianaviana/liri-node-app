# LIRI bot
LIRI Bot is a Language Interpretation and Recognition Interface. LIRI Bot is a command line node app that takes in parameters and gives you back data.

* Screenshot of all Liri Commands:
![Liri All Commands](/images/liri-all-commands.png)

## NPM Dependencies

*dotenv
*axios
*node-spotify-api
*request
*fs
*moment

## API Integration

*Bands in Town
*Spotify
*OMDB*

##How to Use Liri
###The following commands run without user input:

###Spotify
*`node liri.js spotify-this-song <insert song title>`

*This will display information about the song to the terminal/bash window. 
![Spotify Command](/images/spotify.gif)

*`node liri.js concert-this <insert artist name>`
*This will display information about the concerts to the terminal/bash window. 
![Concert Command](/images/concert.gif)

*`node liri.js movie-this <insert movie name>`
*This will display information about the movie to the terminal/bash window. 
![Movie Command](/images/movie.gif)

*`node liri.js do-what-it-says`
*This will display information set on `random.txt` file to the terminal/bash window. 
![Do What It Says Command](/images/dowhat.gif)

###These commands accept user input - below are the info I used for my HW submission:
$ node liri.js spotify-this-song 'Waiting for Tonight'
$ node liri.js movie-this 'Notting Hill'
$ node liri.js concert-this 'Brandi Carlile'
