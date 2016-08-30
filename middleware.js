'use strict';

let middleware = {
	logger: function (req, res, next) {
		let date = new Date().toString();
		console.log('Request: ' + date + ' ' + req.originalUrl + ' ' + req.method);
		next();
	},
	requireAuth: function (req, res, next) {
		console.log('Needs to be authenticated');
		next();
	}
};

module.exports = middleware;