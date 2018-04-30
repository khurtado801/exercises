const yargs = require ('yargs'); // Load in Yargs
const geocode = require('./Geocode/Geocode');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});