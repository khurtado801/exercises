/**
 * Both of these require statements are the same, the last one uses ES6 destructuring
 * const MongoClient = require('mongodb').MongoClient;
 */
const { MongoClient, ObjectID } = require('mongodb');

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
     * findOneAndUpdate
     * Update an item and get the new document back
     */
	db.collection('Users').findOneAndUpdate({
		// First argument is the filter object
		_id: new ObjectID('5b63070fca16c6324f4f2a84')
	}, {
		// Second argument is the update object
		// Call the MongoDB set update operator
		$set: {
			name: 'Anthony Hurtado'
		},
		$inc: {
			age: 1
		}
	}, {
		// Third argument is the options object
		returnOriginal: false
		// .then Promise to take our result and print to screen
	}).then((result) => {
		console.log(result);
	});

	// Close connection to mongodb server
	// client.close();
});
