var express = require('express');
var router = express.Router();
//var model = require('./models');
var Burger = require('../models/')["Burger"];
console.log(Burger);

router.get('/', function(req, res) {
    res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
    Burger.findAll()
    .then(function(data){
        res.render('index', {burgers: data});
    });
});

router.post('/burgers/create', function(req, res) {
    console.log(req.body.burger);
    Burger.create({burger_name: req.body.burger_name, devoured:false})
    .then(function() {
        res.redirect('/burgers');
    });
});

router.put('/burgers/update/:id', function(req, res) {
    Burger.update({devoured:true},{where: { id: req.params.id}})
    .then(function(){
        res.redirect('/burgers');
    });
});

router.delete('/burgers/delete/:id', function (req, res) {
    Burger.delete({where: { id: req.params.id}})
    .then(function(){
        res.redirect('/burgers');
        });
    });

module.exports = router;