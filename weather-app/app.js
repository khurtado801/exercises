const request = require('request');

/**
 * Request function takes two arguments. The first argument is options object, 
 * You can configure all sorts of info in the options object
 * Second argument is call-back function. This is called once the data comes back
 * from the HTTP endpoint. In our case it will be called once the json data
 * comes back into the Node application
 */
request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20st%20philadelphia&key=AIzaSyD52Jc8l2IZc_86bilqqD66XkldvOVVlVo',
    json: true // This tells the request function that the data coming back will be json data and take json string and convert to object 
}, (error, response, body) => {
    console.log(body);
})