var express = require("express");
var bodyParser = require("body-parser");
// var methodOverride = require("method-override");


// var timeout = require("connect-timeout");
// var fs = require("fs");
// var morgan = require('morgan');
// var path = require("path");

// // set up port to deploy in Heroku
// var PORT = process.env.PORT || 8080;

// variable to run express
var app = express();

// Server as static content for the app from the "public" directory
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
// app.use("/udpate", routes);
// app.use("/create", routes);
// app.use(haltOnTimedout);

// Start the server so that it can begin listening to client requests
var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log("Server listening on: " + PORT);
});
// modules.export = JAWSDB_URL=value
