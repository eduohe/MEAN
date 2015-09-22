var connection = require("./index");

var mongoose = connection.mongoose
	, Schema = mongoose.Schema;

var UserSchema = new Schema({
	name:  {type: String, default: ''},
	email:  {type: String, default: '', unique: true},
	password:  {type: String, default: ''}
});

var User = mongoose.model("User", UserSchema);

exports.list = function(req, res) {
	User
		.find()
		.exec(function(err, users) {
			if(err) {
				res.json(err);
			} else {
				res.json(users);
			}
		});
};

exports.get = function(req, res) {

	var id = req.params.id;

	User
		.findOne({_id: id})
		.exec(function(err, users) {
			if(err) {
				res.json(err);
			} else {
				res.json(users);
			}
		});
};

exports.create = function(req, res) {

	var dataBody = req.body;

	var data = {
		name: dataBody.name,
		email: dataBody.email,
		password: dataBody.password
	}

	var user = new User(data);
	user.save(function(err, data) {
			if(err) {
				res.json(err);
			} else {
				res.json(data);
			}
	});
};

exports.update = function(req, res) {

	var id = req.params.id;
	var data = req.body;
	console.log(data);

	User.update({_id: id}, data, function(err, data) {
			if(err) {
				res.json(err);
			} else {
				res.json(data);
			}
	});
};

exports.delete = function(req, res) {

	var id = req.params.id;

	User.remove({_id: id}, function(err, data) {
			if(err) {
				res.json(err);
			} else {
				res.json(data);
			}
	});
};