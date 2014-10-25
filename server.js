var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/extinct_mammals");

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
 	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
 	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
 	next();
});

var schema = new mongoose.Schema({
	name: String,
	type: String,
	year_extinct: Number
});

var Mammal = mongoose.model("Mammal", schema);

app.get("/", function(req, res) {
	Mammal.find(function(err, mammals) {
		if (err) {
			return console.error(err);
		}
		res.send(mammals);
	});
	//res.send(Mammal.find()).sort({name: 1});
});

app.post("/", function(req, res) {
	var newMammal = new Mammal({
		name: req.body.name,
		type: req.body.type,
		year_extinct: req.body.year_extinct
	});
	newMammal.save();
	res.status(200).end();
});

app.listen(9001);