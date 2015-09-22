var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/MEAN");

var db = mongoose.connection;

db.on("error", function(err) {
	console.log("Connection error", err);
});

db.once("open", function() {
	console.log("Connection ok");
});

exports.mongoose = mongoose;