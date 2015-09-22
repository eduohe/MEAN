var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/angular/:dir/:name', function(req, res, next) {
  var name = req.params.name;
  var dir = req.params.dir;
  res.render(dir + '/' + name);
});

module.exports = router;
