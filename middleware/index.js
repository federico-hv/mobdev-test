const setLogger       = require('./logger'); 
const setBodyParser   = require('./bodyParser');
const setErrorHandler = require('./error');

function setMiddleware(app) {
	setLogger(app);
	setBodyParser(app);
	setErrorHandler(app);
}


module.exports = setMiddleware;