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

	// First part of challenge: deleteMany
	db.collection('Users').deleteMany({name: 'Kenny Hurtado'}).then((result) => {
		console.log(result);
	});
    
	// Second part of challenge: deleteOne
	db.collection('Users').deleteOne({
		_id: new ObjectID('5b63071bc1c6b63251ca155b')
	}).then((result) => {
		console.log(result);
	});
});
