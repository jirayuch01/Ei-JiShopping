var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressHbs = require('express-handlebars');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var validator = require('express-validator');
var MongoStore = require('connect-mongo')(session);
var routes = require('./routes/index');
var userRoutes = require('./routes/user');
var app = express();

//mongoose.connect('mongodb://localhost:27017/ei-jishopping', {useMongoClient: true});
mongoose.connect('mongodb://nanoha1412:Jirayu1412@ds133290.mlab.com:33290/ei-jishopping', {useMongoClient: true});
mongoose.connection.on('error', console.error.bind(console, 'Connection error:'));
mongoose.connection.once('open', function (callback) {
  console.log('Connected to MongoDB!');
});

require('./config/passport');

app.engine('.hbs', expressHbs({
  defaultLayout: 'layout',
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(validator());
app.use(cookieParser());
app.use(session({
  secret: 'mysupersecret',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  }),
  cookie: {
    maxAge: 180 * 60 * 1000
  }
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
  res.locals.login = req.isAuthenticated();
  res.locals.session = req.session;
  next();
});
app.use('/user', userRoutes);
app.use('/', routes);

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;