console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')

// A third parameter is need for appendFile, in this option we use a call-back as the third parameter
// fs.appendFile('greetings.txt', 'Hello, World! This is option 1.', function (err) {
//     if (err) {
//         console.log('Unable to write to file');
//     }
// });

let user = os.userInfo();

// A third parameter is need for appendFile, this time we call appendFileSync
fs.appendFileSync('greetings.txt', `Hello ${user.username}!` );