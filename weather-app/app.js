const request = require('request');
const yargs = require ('yargs'); // Load in Yargs

const argv = yargs.options ({
    a: { // 'A' is for address
        demand: true,
        alias: 'address',
        describe: 'Address to feetch weather for',
        string: true
    } // Object that stores final parsed object that was originally sent through yargs
})
.help()
.alias('help', 'h') // Alias takes two arguments-first is the actual argument to set alias for, and second argument is the actual alias.
.argv;

let encodedAddress =  encodeURIComponent(argv.address) // Set equal to return value from encodeURIComponent 


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
        console.log('Unable to connect to Google servers...');
    } else if(body.status === 'ZERO_RESULTS') { // Check status property, if status property is ZERO_RESULTS
        console.log('Unable to find that address...');
    } else if(body.status === 'OK') {
        console.log(`Address:  ${body.results[0].formatted_address}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
});

