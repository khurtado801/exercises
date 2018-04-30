const request = require('request');

let geocodeAddress = (address, callback) => {
let encodedAddress =  encodeURIComponent(address) // Set equal to return value from encodeURIComponent 

request({
 url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyA9XvMxvpE_AKCHONO6ISFH3Sca0yy9MOw`,
 json: true
}, (error, response, body) => {
    /**
     * Check status text value in results to determine whether or not a request was succesful.
     * Check if status is set to OK to detemine that things went well.
     * Between the status propery and the error object, we can determine what to do inside of the callback
     */
    if (error) { //check if error object exists and run code in block if error exists
        callback('Unable to connect to Google servers...')
    } else if(body.status === 'ZERO_RESULTS') { // Check status property, if status property is ZERO_RESULTS
        callback('Unable to find that address.');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
};

module.exports.geocodeAddress = geocodeAddress;