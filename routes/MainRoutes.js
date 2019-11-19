'use strict';
/*
 * This function expose the route (Can be redirected to a controller)
 */
module.exports = function(app) {
	var controller = require('../controllers/MainController');
	//Index page
	app.get('/',(req, res) => {
		 controller.test();
		 res.render('index.ejs');
	});
	
	app.post('/api/v1/test',(req, res, next) => {
		controller.create(req,res,next);
	});
	
	app.get('/api/v1/test',(req, res, next) => {
		controller.getAll(req,res,next);
	});
};
