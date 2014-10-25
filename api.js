var Mammal = require("./mammal.js");

module.exports.post = function(req, res) {
	var newMammal = new Mammal({
		name: req.body.name,
		type: req.body.type,
		year_extinct: req.body.year_extinct
	});
	newMammal.save();
	res.status(200).end();
};

module.exports.get = function(req, res) {
	Mammal.find(function(err, mammals) {
		if (err) {
			return console.error(err);
		}
		res.send(mammals);
	});
	//res.send(Mammal.find()).sort({name: 1});
};
