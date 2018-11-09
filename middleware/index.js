const setLogger       = require('./logger'); 
const setBodyParser   = require('./bodyParser');
const setErrorHandler = require('./error');
const setRoutes       = require('../routes');

function setMiddleware(app) {
	setLogger(app);
	setBodyParser(app);
	setRoutes(app);
	setErrorHandler(app);
}


module.exports = setMiddleware;