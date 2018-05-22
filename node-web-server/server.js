// Load in Express
const express = require('express');
// Load in our config
const config = require("./config");

// Create new Express app
// Save return result from calling Express as a function
let app = express();

// Route handler for root
app.get('/', (req, res) => {
// Respond to request by sending data back, a string
    // res.send('<h1>Hello, Express!</h1>');
    res.send({
        name: 'Kenny',
        likes: [
            'Techno',
            'House',
            'Minimal',
            'Dub'
        ]
    })
});

// Route handler for about
app.get('/about', (req, res) => {
// Respond to request by sending data back, a string
    res.send('About Page')
})

// Route handler for Bad
app.get('/bad', (req, res) => {
    // Respond to request by sending data back, a string
    res.send({
        msg: "Unable to fulfill this request..."
    })
})

// Bind application to port
app.listen(config.port, () => {
    console.log('Listening on port ' + config.port + '...');
});