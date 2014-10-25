var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var api = require("./api.js");

var app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/extinct_mammals");

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
 	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
 	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
 	next();
});

app.post("/", api.post);
app.get("/", api.get);

app.listen(9001);