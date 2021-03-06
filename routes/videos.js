var express = require('express');
var router = express.Router();

var User = require('../models/user');
var Video = require('../models/video');

// GET Video hochladen
router.get('/upload', function(req, res){
  res.status(200).render('upload');
});

// POST Video hochladen
router.post('/upload', function(req,res){
  var currentUser = req.user;
  var videoname   = req.body.videoname;
  var videourl    = req.body.videourl;
  //var alpha       = req.body.alpha;
  var alpha = req.body.alpha ? true : false;

  req.checkBody('videoname', 'Bitte einen Namen für das Video eingeben.').notEmpty();
  req.checkBody('videoname', 'Bitte eine Adresse für das Video eingeben.').notEmpty();



  var errors = req.validationErrors();

  if(errors){
    res.render('upload', {
      errors:errors
    });
  } else {

    // Video URL bearbeiten
    videourl = videourl.replace('?dl=0', '').replace('www', 'dl');

    var newVideo = new Video({
      videoname: videoname,
      videourl : videourl,
      alpha    : alpha
    });

    Video.createVideo(newVideo, function(err, video){
          if(err) throw err;
          console.log('Video uploaded successfully!');
    });


    User.findByIdAndUpdate(currentUser._id,
      {$push: {videos: newVideo}},
      {safe: true, upsert: true},
      function(err, doc){
        if(err) throw err;
        console.log(newVideo);
      }
    );

    req.flash('success_msg', 'Video wurde erfolgreich hinzugefügt');
    res.status(200).redirect('/');
  };
});

module.exports = router;
