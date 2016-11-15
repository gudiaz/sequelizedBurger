// =============================================================
// Dependencies
// =============================================================
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// add the burger model and sync it.
// Syncing the model will create a matching table in our MySQL db. 
var Character = require("./models")["Burger"]
Burger.sync(); // creates a burgers table

// =============================================================
// Sets up the Express App
// =============================================================
var PORT = process.env.PORT || 8080;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));

// =============================================================
// Handlebars
// =============================================================
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

// =============================================================
// Routes
// =============================================================
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);


// =============================================================
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});