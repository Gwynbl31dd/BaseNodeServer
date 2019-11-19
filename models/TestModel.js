'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TestSchema = new Schema({
	  name: {
	    type: String
	  }
});

module.exports = mongoose.model('Test', TestSchema);