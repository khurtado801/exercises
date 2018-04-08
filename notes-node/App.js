console.log('Starting app.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const argv = yargs.argv;
let command = process.argv[2];
console.log('Command: ', command);
console.log('Process', process.argv);
console.log('Yargs', argv);

if (command === 'add') {
    // Call addNotes and pass in title and body
    notes.addNote(argv.title, argv.body)
} else if (command === 'list') {
    // Call getAll to return all notes, no arguments needed because it will return all notes
    notes.getAll();
} else if (command === 'read') {
    // getNote to get a note using title as argument
    notes.getNote(argv.title)
} else if (command === 'remove') {
    // removeNote method to remove note, takes title as argument
    notes.removeNote(argv.title)
} else {
    console.log('Command not found')
}