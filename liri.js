require("dotenv").config();

// var spotify = new Spotify(keys.spotify);
var request = require("request");
var fs = require("fs");


// var command = process.argv[2];
// var choice = process.argv[3];

// ===================================================================

let command = process.argv[2];
let input = process.argv[3];



switch (command, input) {
    case "movie-this":
        movie();
        break;

    case "concert-this":
        concert();
        break;

    case "spotify-this-thing":
        spotifyThisSong();
        break;

    case "do-what-it-says":
        doWhatItSays();
        break;
}

function movie(input) {


    var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";


    console.log(queryUrl);

    request(queryUrl, function (error, response, body) {


        if (!error && response.statusCode === 200) {


            console.log("Movie Information: " + JSON.parse(body).Title);
            console.log("Movie Information: " + JSON.parse(body).Year);
            console.log("Movie Information: " + JSON.parse(body).Rated);
            console.log("Movie Information: " + JSON.parse(body).Country);
            console.log("Movie Information: " + JSON.parse(body).Language);
            console.log("Movie Information: " + JSON.parse(body).Plot);
            console.log("Movie Information: " + JSON.parse(body).Actors);
        }
    });
}

function concert(input) {

    var queryUrl = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";


    console.log(queryUrl);

    request(queryUrl, function (error, response, body) {


        if (!error && response.statusCode === 200) {


            console.log("Movie Information: " + JSON.parse(body).Venue);
            console.log("Movie Information: " + JSON.parse(body).location);
            console.log("Movie Information: " + JSON.parse(body).Date);

}

function spotifyThisSong() {

}

function doWhatItSays() {

    fs.readFile("log.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error)
        }
        console.log(data);
        var dataArr = data.split(",");

        consol.log(dataArr);
    })

}