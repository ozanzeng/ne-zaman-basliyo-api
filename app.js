const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const scheduleRouter = require('./routes/schedule');
const scheduleDetailRouter = require('./routes/schedule-detail');
const categoryRouter = require('./routes/category');
const cors = require('cors')
const app = express();

// DB Connection
const db = require('./helper/db')();

// Config
const config = require('./config.js');
app.set('api_secret_key', config.api_secret_key);

// Middleware
const verifyToken = require('./middleware/verify-token');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/web-api', verifyToken);
app.use('/register', indexRouter, );
app.use('/web-api/schedule', scheduleRouter);
app.use('/web-api/schedule-detail', scheduleDetailRouter);
app.use('/web-api/category', categoryRouter);


app.use(function (req, res, next) {
  // catch 404 and forward to error handler and pass to next layer of middleware
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error:{message: err.message, code: err.code}});
});

module.exports = app;
