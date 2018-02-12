var express = require('express');
var router = express.Router();

// Gruppe erstellen
router.get('/create', function(req, res){
  res.status(200).render('create');
});

module.exports = router;
