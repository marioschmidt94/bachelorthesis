// Variablen
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bachelorthesis');
var db = mongoose.connection;﻿

//Routes festlegen
var routes = require('./routes/index');
var users = require('./routes/users');
var videos = require('./routes/videos');
var groups = require('./routes/groups');
var howtos = require('./routes/howtos');

// Server initialisieren
var app = express();

// View Engine
app.set('views', path.join(__dirname, 'views')); // Views-Ordner für Views
app.engine('handlebars', exphbs({defaultLayout:'layout'})); // Handlebars als Engine
app.set('view engine', 'handlebars'); // View Engine: handlebars

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

// Public Ordner für Stylesheets, Bilder etc.
app.use(express.static(path.join(__dirname, 'public')));

// Express Session Middleware
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Express Validator Middleware
app.use(expressValidator({
  errorFormatter: function(param, msg, value){
    var namespace = param.split('.'),
        root = namespace.shift(),
        formParam = root;

    while(namespace.length){
      formParam += '[' + namespace.shift() + ']';
    }

    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash Middleware
app.use(flash());

// Globale Variablen
app.use(function(req, res, next){
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg   = req.flash('error_msg');
  res.locals.error       = req.flash('error');
  next();
});
app
app.use('/', routes);
app.use('/users', users);
app.use('/videos', videos);
app.use('/groups', groups);
app.use('/howtos', howtos);

// Port
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function(){
  console.log('Server started on port ' + app.get('port'));
});
