// Declare variable and set it equal to the mongoose library
var mongoose = require('mongoose');
// Specify default promise library
mongoose.Promise = global.Promise;
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/TodoApp');

// Use model method to create new model
var Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});
/**
 * This is just a test
 * Todo is what comes back from mongoose.model as a constructor function We add the 'new' keyword in front
 * of Todo because we are creating a new instance of to do
 * The Todo constructor function does take an argument. It's going to be an object where we can specify
 * some of these properties
 */
var newTodo = new Todo({
	text: 'Buy rubber gloves'
});

newTodo.save().then((doc) => {
	// Successfull callback, printed using pretty print system
	console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
	// Unsuccessful callback, returns error object which can be viewed in the log to see why the call failed
	console.log('Unable to save...', e);
});

// Use model method to create new model
var User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		minlength: 1,
		unique: true,
		trim: true
	}
});
/**
 * This is just a test
 * Todo is what comes back from mongoose.model as a constructor function We add the 'new' keyword in front
 * of Todo because we are creating a new instance of to do
 * The Todo constructor function does take an argument. It's going to be an object where we can specify
 * some of these properties
 */
var user = new User({
	email: 'emailAddress@provider.com'
});

user.save().then((doc) => {
	// Successfull callback, printed using pretty print system
	console.log('User saved...', doc);
}, (e) => {
	// Unsuccessful callback, returns error object which can be viewed in the log to see why the call failed
	console.log('Unable to save user...', e);
});
