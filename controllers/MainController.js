'use strict';

var mongoose = require('mongoose'),
	TestSchema = require('../models/TestModel');

class MainController { 
	
	constructor(){
		// Add the schemas
		mongoose.model('Test');
	}
	
	test() {
		console.debug("Test");
	}
	
	create(req,res,next) {
		var Test = mongoose.model('Test');
		var test = new Test(req.body);
		test.save((err) => {
			if (err) {
				next(err);
			} 
			else {
				res.json(test);
			}
		});
	}
	
	getAll(req,res,next) {
		var Test = mongoose.model('Test');
		Test.find(function (err, tests) {
			if (err) {
				next(err);
			} else {
				res.json(tests);
			}
		});
	}
}

module.exports = new MainController();