var express = require('express');
var router = express.Router();

var UserModel = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
	UserModel.list(req, res);
});

router.get('/:id', function(req, res, next) {
	UserModel.get(req, res);
});

router.post('/', function(req, res, next) {
	UserModel.create(req, res);
});

router.put('/:id', function(req, res, next) {
	UserModel.update(req, res);
});

router.delete('/:id', function(req, res, next) {
	UserModel.delete(req, res);
});
module.exports = router;
