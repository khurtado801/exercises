const MongoClient = require('mongodb').MongoClient;

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
     * Call to db.connect, which will create new database named Users
     * And insert new record
     */
	db.collection('Users').insertOne({
		// Object to store key-value pairs of records
		name: 'Ken Hurtado',
		age: 42,
		location: 'Salt Lake City'
	}, (err, result) => {
		if (err) { // Check if error argument exists
			return console.log('Unable to insert user...', err); // If err exists print message and stop fucntion execution
		}
		// Callback function
		console.log(result.ops[0]._id.getTimestamp());
	});
	
	// Close connection to mongodb server
	client.close();
});
