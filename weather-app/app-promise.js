const yargs = require ('yargs'); // Load in Yargs
const axios = require('axios');

const argv = yargs.options ({
    a: { // 'a' is for address
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    } // Object that stores final parsed object that was originally sent through yargs
})
.help()
.alias('help', 'h') // Alias takes two arguments-first is the actual argument to set alias for, and second argument is the actual alias.
.argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

// Once the GET request gets resolve, 'then' do something. What GET returns is actually a promise
axios.get(geocodeUrl)
.then((response) => {
  // Declare and initialize variable to hold new data
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address....')
  }
  let lat = response.data.results[0].geometry.location.lat;
  let lng = response.data.results[0].geometry.location.lng;
  let weatherUrl = `https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/${lat},${lng}`;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherUrl);
})
.then((response) => {
  let temperature = response.data.currently.temperature;
  let apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
})
// If there's a problem it sends an error.
// So we put error in the callback function
.catch((e) => {
  // Check if error code is ENOTFOUND
  if (e.code === 'ENOTFOUND') {
    // Display user friendly  message
    console.log('Unable to connect to API servers...')
  } else {
    // Display error message for ENOTFOUND
    console.log(e.message);
  }
});
