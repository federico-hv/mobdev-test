const setMiddleware = require('./middleware');
const express = require('express');

var app = express();

setMiddleware(app);

module.exports = app;
