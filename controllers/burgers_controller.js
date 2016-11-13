/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');
var path = require('path');

router.get('/', function (req, res) {
	res.redirect('/');
});

router.get('/burgers', function (req, res) {
	burger.selectAll(function (data) {
		var hbObject = { burgers: data };
		console.log(hbObject);
		res.render('index', hbObject);
	});
});

router.post('/create', function (req, res) {
	burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, false], function () {
		res.redirect('/burgers');
	});
});

router.put('/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.updateOne({ devoured: req.body.devoured }, condition, function () {
		res.redirect('/burgers');
	});
});

router.delete('/delete/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	burger.deleteOne(condition, function () {
		res.redirect('/burgers');
	});
});

router.get('/*',function(req,res){
	res.sendFile(path.join(__dirname + '/../public/test.html'));
})

module.exports = router;