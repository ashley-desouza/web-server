'use strict';

let express = require('express');
let middleware = require('./middleware');

let app = express();

const PORT = process.env.port || 3000;

// app.get('/', function (req, res) {
// 	console.log('Express JS');
// });
app.use(middleware.logger);
app.use(express.static(`${__dirname}/public`));

app.get('/about', middleware.requireAuth, function (req, res) {
	res.send('About Us');
});

app.listen(PORT, function () {
	console.log(`Listening on port ${PORT}`);
});