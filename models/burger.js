/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var burger = {
	selectAll: function (cb) {
		orm.selectAll('burgers', function (res) {
			cb(res);
		});
	},
	// cols and vals are arrays
	insertOne: function (cols, vals, cb) {
		orm.create('burgers', cols, vals, function (res) {
			cb(res);
		});
	},
	updateOne: function (cols, condition, cb) {
		orm.update('burgers', cols, condition, function (res) {
			cb(res);
		});
	},
	deleteOne: function (condition, cb) {
		orm.delete('burgers', condition, function (res) {
			cb(res);
		});
	}
};

module.exports = burger;