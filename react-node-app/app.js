const express = require('express');
const path = require('path');

let app = express();
app.use(express.static(path.join(__dirname, '/html')));

// Assign port number for app to listen on
app.listen(7777, () => {
    console.log('Listening on port:', 7777);
});

