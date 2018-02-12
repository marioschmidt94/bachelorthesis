var express = require('express');
var router = express.Router();

// Get Main Page
router.get('/', ensureAuthenticated, function(req, res){

  // TO DO: VIDEOS ANZEIGEN

  res.status(200).render('index');
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
