// Declare variable and set it equal to the mongoose library
var mongoose = require('mongoose');

// Specify default promise library
mongoose.Promise = global.Promise;
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/TodoApp');

// Use model method to create new model
var Todo = mongoose.model('Todo', {
	text: {
		type: String
	},
	completed: {
		type: Boolean
	},
	completedAt: {
		type: Number
	}
});

/**
 * This is just a test
 * Todo is what comes back from mongoose.model as a constructor function
 * We add the 'new' keyword in front of Todo because we are creating a new instance of to do
 * The Todo constructor function does take an argument.
 * It's going to be an object where we can specify some of these properties
 */
var newTodo = new Todo({
	text: 'Cook dinner'
});

newTodo.save().then((doc) => {
	// Successful callback
	console.log('Saved todo...', doc);
}, (e) => {
	// Unsuccesful callback
	console.log('Unable to save todo...');
});

var otherTodo = new Todo({
	text: 'Feed the cat',
	completed: true,
	completedAt: 123
});

otherTodo.save().then((doc) => {
	// Successfull callback, printed using pretty print system
	console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
	// Unsuccessful callback, returns error object which can be viewed in the log to see why the call failed
	console.log('Unable to save...', e);
});