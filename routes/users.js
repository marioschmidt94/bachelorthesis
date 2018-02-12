var express = require('express');
var router = express.Router();

var User = require('../models/user');

// GET Registrieren
router.get('/register', function(req, res){
  res.status(200).render('register');
});

// POST Registrieren
router.post('/register', function(req, res){
  var username = req.body.username;
  var firstname = req.body.firstname;
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  var password2 = req.body.password2;

  // Validieren
  req.checkBody('username', 'Benutzername wird benötigt').notEmpty();
  req.checkBody('firstname', 'Vorname wird benötigt').notEmpty();
  req.checkBody('name', 'Nachname wird benötigt').notEmpty();
  req.checkBody('email', 'Email wird benötigt').notEmpty();
  req.checkBody('email', 'Keine gültige Email Adresse').isEmail();
  req.checkBody('password', 'Passwort wird benötigt').notEmpty();
  req.checkBody('password2', 'Passwort muss bestätigt werden').notEmpty();
  req.checkBody('password2', 'Passwörter stimmen nicht überein').equals(req.body.password);

  var errors = req.validationErrors();

  if(errors){
    res.status(403).render('register',{
      errors:errors
    });
  } else {
    var newUser = new User({
      username: username,
      firstname: firstname,
      name: name,
      email: email,
      password: password
    });

    User.createUser(newUser, function(err, user){
      if(err) throw err;
      console.log(user);
    });

    req.flash('success_msg', 'Erfolgreich registriert. Sie können sich jetzt einloggen!');
    res.status(200).redirect('login');
  }
});

// Einloggen
router.get('/login', function(req, res){
  res.status(200).render('login');
});

module.exports = router;
