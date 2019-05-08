// read and set environment variable with the dotenv package
require("dotenv").config();

// This will allow me to use Axios for requests
let axios = require("axios");

// fs also known as file system
const fs = require("fs");

//  you need to Require moment
const moment = require("moment");

// Here is where i Import and store keys.js as variable
const keys = require("./keys.js");

// This will be my Spotify api and wrapper
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

// This is the OMDB API
let omdb = keys.omdb;

// This is the Bandsintown API
let bandsintown = keys.bandsintown;

// This code gets us User input and command
let userInput = process.argv[2];
let userQuery = process.argv[3];

function userCommand(userInput, userQuery) {
  switch (userInput) {
    case "concert-this":
      concertThis(userQuery);
      break;
    case "spotify-this-song":
      spotifyThis(userQuery);
      break;
    case "movie-this":
      movieThis(userQuery);
      break;
    case "do-what-it-says":
      doThis();
      break;
    default:
      console.log("Sorry idgi");
      break;
  }
}

userCommand(userInput, userQuery);

// Search Bandsintown artist events API for an artist and render: venue name, venue location, event date(MM/DD/YYYY)
// https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp

function concertThis(artist) {
  axios
    .get(
      "https://rest.bandsintown.com/artists/" +
        artist +
        "/events?app_id=codingbootcamp"
    )
    .then(function(response) {
      // console.log(response)
      console.log("Venue name:", response.data[0].venue.name);
      console.log("Venue location:", response.data[0].venue.city);
      // Format event date
      var eventDate = moment(response.data[0].datetime).format("MM/DD/YYYY");
      console.log("Event date:", eventDate);
    })
    .catch(function(error) {
      console.log(error);
    });
}

// This will show the information that is: artist(s), song name, preview link of song, album
//  The default will be set to "The Sign" by Ace of Base is a user does NOT type in a song.

function spotifyThis(song) {
  // default to "The Sign" by Ace of Base if no song is entered
  if (!song) {
    song = "The Sign Ace of Base"; // this is where i will be adding the artist name 
  }

  spotify.search({ type: "track", query: song }, function(err, data) {
    if (err) {
      return console.log(err);
    }
    console.log("Artist(s): ", data.tracks.items[0].album.artists[0].name);
    console.log("Preview: ", data.tracks.items[0].preview_url);
    console.log("Album: ", data.tracks.items[0].album.name);
  });
}

// Output the following info: title, year, IMDB rating, Rotten Tomatoes rating, country, language, plot, actors
//  output "Mr. Nobody" if the user doesnt type a movie

function movieThis(movie) {
  // If user doesn't type movie, output "Mr. Nobody"
  if (!movie) {
    movie = "Mr. Nobody";
    console.log(
      "If you haven't watched Mr. Nobody, then you should: http://www.imdb.com/title/tt0485947/"
    );
    console.log("It's on Netflix!");
  }

  axios
    .get("http://www.omdbapi.com/?apikey=trilogy&t=" + movie)
    .then(function(data) {
      var results = `
            Title: ${data.data.Title}
            Year: ${data.data.Year}
            IMDB rating: ${data.data.Rated}
            Rotten Tomatoes rating: ${data.data.Ratings[1].Value}
            Country: ${data.data.Country}
            Language: ${data.data.Language}
            Plot: ${data.data.Plot}
            Actors: ${data.data.Actors}
            `;

      console.log(results);
    })
    .catch(function(error) {
      console.log(error);
    });
}

// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Take the text inside random.txt and use it call one of LIRI's commands
function doThis() {
  fs.readFile("random.txt", "utf8", function(err, data) {
    data = data.split(",");
    var userInput = data[0];
    var userQuery = data[1];

    userCommand(userInput, userQuery);

    // switch (userInput) {
    //     case "concert-this":
    //         concertThis(userQuery)
    //         break;
    //     case "spotify-this-song":
    //         spotifyThis(userQuery)
    //         break;
    //     case "movie-this":
    //         movieThis(userQuery)
    //         break;
    //     default:
    //         break;

    // }
  });
}