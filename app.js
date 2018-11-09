const setMiddleware = require('./middleware');
var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');

var app = express();

setMiddleware(app);

module.exports = app;
