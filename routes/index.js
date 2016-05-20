var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Twitter-Placeholder'});
});

router.get('/twitter', function(req, res, next) {
  res.render('twitter', { title: 'Twitter-Placeholder'});
});

module.exports = router;
