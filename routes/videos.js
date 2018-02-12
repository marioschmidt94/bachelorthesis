var express = require('express');
var router = express.Router();

// Video hochladen
router.get('/upload', function(req, res){
  res.status(200).render('upload');
});

module.exports = router;
