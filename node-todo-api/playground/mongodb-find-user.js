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
    
	/**
     * Call to db.connect to the Todos database
     * Find returns a cursor so we make a call to toArray to convert it
     * And then have docs do something with it
     * Then we attach a promise to docs to print the results to the screen
     */
	db.collection('Users').find({name: 'Kenny Hurtado'}).toArray().then((docs) => {
		console.log('Users');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch user...', err);
	});

	// Close connection to mongodb server
	// client.close();
});
