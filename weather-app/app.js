const request = require('request');

request({
    url: 'https://api.darksky.net/forecast/436f469717a2ae0b3a6e7ea9510a8c31/40.70786390000001,-111.8508966',
    json: true
}, (error, response, body) => { // Callback arguments
    if (!error && response.statusCode === 200) {
        console.log(body.currently.temperature);
    } else {
        console.log('Unable to fetch weather...')
    }
});