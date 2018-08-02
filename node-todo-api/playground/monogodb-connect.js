/**
 * Both of these require statements are the same
 * The last one uses ES6 destructuring
 * const MongoClient = require('mongodb').MongoClient;
 */
const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
	/**
     * Error handling
     */
	if(err) {
		return console.log('Unable to connect to MongoDB server...');
	}
	console.log('Connected to MongoDB server...');
	const db = client.db('TodoApp');
    
	/**
     * Call to db.connect
     * which will create new collection named Users if it dones't exist
     * and then insert new record
     */
	db.collection('Users').insertOne({
		// Object to store key-value pairs of records
        
		// name: 'Kajsa Hurtado',
		// age: 35,
		// location: 'Salt Lake City'
		text: 'Get rid of dead body',
		completed: false
	}, (err, result) => {
		if (err) { // Check if error argument exists
			return console.log('Unable to insert record...', err); // If err exists print message and stop fucntion execution
		}
		// Callback function
		console.log(result.ops, undefined, 2);
	});
	
	// Close connection to mongodb server
	client.close();
});
