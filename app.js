const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const menuRouter = require('./routes/Menu');
const menuPositionRouter = require('./routes/MenuPosition');
const categoryRouter = require('./routes/Category');
const userRouter = require('./routes/User');
const userPermitionRouter = require('./routes/UserPermition');
const userDetailRouter = require('./models/UserDetail');
const articleRouter = require('./routes/Article');
const articleDetailRouter = require('./routes/ArticleDetail');
const templateRouter = require('./routes/Template');
const settingsRouter = require('./routes/Settings');

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

// Routers
app.use('/', indexRouter);
// app.use('/web-api', verifyToken);
app.use('/register', indexRouter);
// APIs
app.use('/web-api/menu', menuRouter);
app.use('/web-api/menuPosition', menuPositionRouter);
app.use('/web-api/category', categoryRouter);
app.use('/web-api/user', userRouter);
app.use('/web-api/userPermition', userPermitionRouter);
app.use('/web-api/userDetail', userDetailRouter);
app.use('/web-api/aricle', articleRouter);
app.use('/web-api/aricleDetail', articleDetailRouter);
app.use('/web-api/template', templateRouter);
app.use('/web-api/settings', settingsRouter);


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
