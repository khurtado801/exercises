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
     * Call to db.connect to the Todos database
     * Find returns a cursor so create a new ObjectID to store our ID
     * And then have docs do something with it
	 *      * Then we attach a promise to docs to print the results to the screen
     */
	db.collection('Todos').find({ // Query Todos collection
		_id: new ObjectID('5b63068f1a6e2d323c289535') // Look for any records that have _id prop equal to the id listed
	}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos...', err);
	});

	// Close connection to mongodb server
	// client.close();
});
