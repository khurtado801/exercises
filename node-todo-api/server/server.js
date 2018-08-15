/**
 * Library imports
 */
var express = require('express'); // Declare variable to store express library
var bodyParser = require('body-parser'); // Declare variable to store body-parser library

/**
 * Local imports
 */
var {mongoose} = require('./db/mongoose');
var {Todo} = require ('./models/todo.js');
var {User} = require ('./models/user.js');

var app = express(); // Declare intialize variable to hold express app

/**
 * Middleware
 */
app.use(bodyParser.json());

/**
 * Routes
 * app.post /todos is route for creating new todos
 * app.get /todos is route for reading all todos
 * and app.get /todos/342423424 is the route for reading a specific todo
 */
app.post('/todos', (req, res) => { // Post arguments are the URL and callback function, callback gets called with req/res
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => { // Callback for success case
		res.send(doc); // Response sends back document
	}, (e) => { // Callback for error case
		res.send(e); // Response sends error back
	});
});

app.listen(3000, () => { // App will listen on port 3000, callback provided which will fire once app is up
	console.log('Listening on port 3000...');
});
