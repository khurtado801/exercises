// Load in Express
const express = require('express');
// Load in our config
const config = require('./config');
const hbs = require('hbs');
const fs = require('fs');
// Create new Express app
// Save return result from calling Express as a function
let app = express();

// Let handlebars know that we want to add support for partials
// Provide the directory you want to use for all of your handlebar partial files
hbs.registerPartials(__dirname + '/views/partials');
// Set various express configs
app.set('view engine', 'hbs');


// More middleware
app.use((req, res, next) => {
    let now = new Date().toString();
    let log = `${now}: ${req.method} ${req.url}`;

    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server.log...')
        }
    });
    next();
});

// Maintenance middleware
// app.use((req, res, next) => {
//     res.render('maintenance.hbs')
// })

// Middleware
app.use(express.static(__dirname + '/public'));

// Register Handle Bars helper.
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})

// Route handler for root
app.get('/', (req, res) => {
// Respond to request by sending data back, a string
    // res.send('<h1>Hello, Express!</h1>');
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my website!',
    })
});

// Route handler for about
app.get('/about', (req, res) => {
// Render is going to let us render any of the templates we have
    res.render('about.hbs', {
        pageTitle: 'About Page',
        // Create a new date
    });
})

// Route handler for Bad
app.get('/bad', (req, res) => {
    // Respond to request by sending data back, a string
    res.send({
        errorMessage: 'Unable to fulfill this request...'
    })
})

// Bind application to port
app.listen(config.port, () => {
    console.log('Listening on port ' + config.port + '...');
});