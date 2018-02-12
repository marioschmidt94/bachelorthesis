var express = require('express');
var router = express.Router();

// Registrieren
router.get('/register', function(req, res){
  res.status(200).render('register');
});

// Einloggen
router.get('/login', function(req, res){
  res.status(200).render('login');
});

module.exports = router;
