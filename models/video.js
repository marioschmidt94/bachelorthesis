var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var VideoSchema = mongoose.Schema({
  videoname: {
    type: String,
    required: true
  },
  videourl: {
    type: String,
    required: true
  },
  alpha: {
    type: Boolean
  }
});

var Video = module.exports = mongoose.model('Video', VideoSchema);

module.exports.createVideo = function(newVideo, callback){
  newVideo.save(callback);
};
