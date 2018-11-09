const apiRoutes = require('./api');

function setRoutes(app) {
	app.use('/api', apiRoutes);
}

module.exports = setRoutes;