var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var UserSchema = mongoose.Schema({
  username: {
    type: String,
    index: true,
    required: true
  },
  firstname: {
    type: String
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  videos: [
    {
      ref: 'Video',
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback){
  bcrypt.genSalt(10, function(err, salt){
    bcrypt.hash(newUser.password, salt, function(err, hash){
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};
