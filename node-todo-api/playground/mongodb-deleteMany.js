/**
 * Both of these require statements are the same, the last one uses ES6 destructuring
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
    
	// deleteMany, targets many documents and remove them
	db.collection('Todos').deleteMany({text: 'Get rid of dead body'}).then((result) => {
		console.log(result);
	});

	// deleteOne, targets one document and removes it

	// findOneAndDelete, remove an individual item and return those values

	// Close connection to mongodb server
	// client.close();
});
