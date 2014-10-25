// The Mammal model

var mongoose = require("mongoose");

var schema = new mongoose.Schema({
	name: String,
	type: String,
	year_extinct: Number
});

module.exports = mongoose.model("Mammal", schema);

