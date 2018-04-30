const yargs = require ('yargs'); // Load in Yargs
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs.options ({
    a: { // 'a' is for address
        demand: true,
        alias: 'address',
        describe: 'Address to feetch weather for',
        string: true
    } // Object that stores final parsed object that was originally sent through yargs
})
.help()
.alias('help', 'h') // Alias takes two arguments-first is the actual argument to set alias for, and second argument is the actual alias.
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
      console.log(errorMessage);
    } else {
      console.log(results.address);
      weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
        if (errorMessage) {
          console.log(errorMessage);
        } else {
          console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
        }
      });
    }
  });