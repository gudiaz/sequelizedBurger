var express = require('express');
var app = express();

// extract our sequelize connection from the models object, to avoid confusion
var sequelize = require('Sequelize');

var models = require('./models');

//models.sequelize.sync();

var conn = models.sequelize;
conn.query('SET FOREIGN_KEY_CHECKS = 0')

	.then(function(){
		return conn.sync({force:true})
	})
	.then(function() {
		return models.Burger.create( 
		{
			burger_name: "Bacon Cheesburger",
			devoured: false 
		}
	)
	})
	.then(function() {
		return models.Burger.create(
		{
			burger_name: "Fish Fillet",
			devoured: false 
		}
	)
})


var routes = require('./controllers/burger_controller.js');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');


app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'));

var hb = require('express-handlebars');
app.engine('handlebars', hb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/', routes);

app.set('port', (process.env.PORT || 8080));

var server = app.listen(app.get('port'), function () {
    console.log("Listening on port " + server.address().port);
});