require('./Api/Models/model.js');
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
mongoose.Promise = require('bluebird');   
var cors = require('cors'); // To allow Cross-Origin Restrictions

mongoose.connect('mongodb://localhost:27017/finalAssessment', { useMongoClient: true });

var app = module.exports = express();


var NODE_ENV = 'development';
app.set('env', process.env.NODE_ENV || 'production');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


routes = require('./Api/Route/routes.js');
app.use(routes);

var port = process.env.PORT || 3000;

app.listen(port);

console.log('Server starts on port ' + port);