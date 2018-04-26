const request = require('request');

request({
 url: 'https://maps.googleapis.com/maps/api/geocode/json?address=2499%20Douglas%20st%20utah&key=AIzaSyD52Jc8l2IZc_86bilqqD66XkldvOVVlVo',
 json: true
}, (error, response, body) => {
    console.log(`Address:  ${body.results[0].formatted_address}`); // Template strings like 'Address: ${}' used for formatting
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
