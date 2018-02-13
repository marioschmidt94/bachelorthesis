var express = require('express');
var router = express.Router();

var User = require('../models/user');
var Video = require('../models/video');

// Get Main Page
router.get('/', ensureAuthenticated, function(req, res){
  var user = req.user;
  User.retrieveVideos(user.username, function(err, currentUser){
    if (err) throw err;
    res.status(200).render('index', {currentUser});
  });
});

function ensureAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    return next();
  } else {
    //req.flash('error_msg', 'Sie sind nicht angemeldet.');
    res.status(403).redirect('/users/login');
  };
};

module.exports = router;
