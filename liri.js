// read and set environment variable with the dotenv package
require("dotenv").config();

//importing keys.js file and storing it as a variable
var keys = require("./keys.js");

// access keys informtion
var spotify  = new spotify(keys.spotify);