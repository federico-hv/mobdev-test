const logger = require('morgan');

function setLogger(app){
	app.use(logger('dev'));
}

module.exports = setLogger;