//routing
var models= require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
    models.Burger.findAll({}).then(function(burgers){
    res.render('index', {
        burgers: burgers
    });
});
});

//for adding in a new burger
router.post('/burgers/create', function (req, res) {
	models.Burger.create({
        burger_name: req.body.burger_name,
        devoured: false
    }).then(function(){
        res.redirect('/burgers');
    });
});

//for updating the status from not devoured to devoured
router.put('/burgers/update/:id', function (req, res) {
	models.Burger.update({
        devoured: req.body.devoured
    },
    {
        where: {id: req.params.id}
    }).then(function(result){
        res.redirect('/burgers');
    })
});

module.exports = router;