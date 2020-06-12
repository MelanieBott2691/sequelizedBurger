var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

// Set up the Express App
var app = express();
var PORT = process.env.PORT || 8081;

// Server as static content for the app from the "public" directory
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

// app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var router = require('./controllers/burgers_controllers.js');
app.use('/', router);

// sync the models by running db.sequelize.sync() before starting express server
app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT);
});
