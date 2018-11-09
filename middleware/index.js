const setBodyParser = require('./bodyParser');


function setMiddleware(app) {
	setBodyParser(app);
}


module.exports = setMiddleware;