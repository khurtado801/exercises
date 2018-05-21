const yargs = require ('yargs'); // Load in Yargs
const axios = require('axios');

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

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
