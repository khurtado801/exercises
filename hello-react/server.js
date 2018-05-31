const express = require('express'); // Get access to Express API

// Create app and call express librry as a function with no arguments 
const app = express();

// What folder we want to serve
// Folder named public that we want to expose to the server
app.use(express.static('public'));

// Start server
app.listen(3000, function () {
    console.log('Express server is up on port 3000...')
})