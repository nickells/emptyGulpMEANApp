var express = require('express');
var router = express.Router();
var db = require('./db.js')


router.get('/all', function(req,res,next){
  res.send('hi')
})


module.exports = router;
