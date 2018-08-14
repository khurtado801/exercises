// Load in mongoose library
var mongoose = require('mongoose');

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

module.exports = {User};