var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ramswaroop' });
});

router.get('/location',function(req,res,next){
  res.render('index',{title:'location info'});
});
router.get('/location/review',function(req,res,next){
  res.render('index',{title:'review'});
});
router.get('/about',function(req,res,next){
  res.render('index',{title:'ram'});
});

module.exports = router;
