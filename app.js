'use strict';

// Module dependencies.
var express = require('express'),
	router = express.Router(),
    routes = require('./routes/MainRoutes'),
    bodyParser = require('body-parser'),
    app = express(),
    http = require('http').Server(app),
    path = require('path'),
    swaggerUI = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json'),
    errorhandler = require('errorhandler'),
    dateUtil = require('./helper/DateUtil'),
    mongoose = require('mongoose'),
    globalConfig = require('./config.json');

//mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/apaulin'); 

// all environments
app.set('port', process.env.PORT || globalConfig.server.port);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(errorhandler());

//rest API requirements
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

/**
 * Expose the request
 * @param req
 * @param res
 * @param next
 * @returns
 */
app.use((req, res, next) => {
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('X-Powered-By','Anthony-Paulin');
	console.debug(dateUtil.date()+" request from "+req.ip);
	console.debug(req.body);
    // Pass to next layer of the middle-ware
    next();
});

//Add the routes
routes(app);

//Add Swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/api/v1', router);

/**
 * Run the server
 * @returns
 */
http.listen(app.get('port'), function(){
	console.debug('Server listening on port :' +app.get('port'));
});
