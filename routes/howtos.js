var express = require('express');
var router = express.Router();

// Get How To
router.get('/', function(req, res){
  res.status(200).render('howto');
});

module.exports = router;
