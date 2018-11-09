const express = require('express');

function setBodyParser(app){
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
}

module.exports = setBodyParser;