var express = require("express");
var db = require("./models");

// Set up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Set up the Express App to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Server as static content for the app from the "public" directory
app.use(express.static(process.cwd() + "/public"));

// Routes
// =================================================================== 
require("./routes/api-routes.js")(app);

// sync the models by running db.sequelize.sync() before starting express server
db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("App listening on PORT " + PORT);
    });
})
