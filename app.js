const setMiddleware = require('./middleware');
var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

setMiddleware(app);

app.use('/', indexRouter);
app.use('/users', usersRouter);


module.exports = app;
