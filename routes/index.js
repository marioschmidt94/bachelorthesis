var express = require('express');
var router = express.Router();

// Get Main Page
router.get('/', function(req, res){
  res.status(200).render('index');
});

module.exports = router;
