// Declare variable and set it equal to the mongoose library
var mongoose = require('mongoose');
// Specify default promise library
mongoose.Promise = global.Promise;
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };
