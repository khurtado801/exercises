console.log('Starting app.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const argv = yargs.argv;
// Set command equal to argv and grab the first element in array which is the title
let command = argv._[0];
console.log('Command: ', command);
console.log('Process', process.argv);
console.log('Yargs', argv);

if (command === 'add') {
    // Call addNotes and pass in title and body
    let note = notes.addNote(argv.title, argv.body)
    // Check if note object is defined
    if (note) {
        console.log('Note created...')
        notes.logNote(note);
    } else {
        console.log('Note title taken...')
    }
} else if (command === 'list') {
    // Call getAll to return all notes, no arguments needed because it will return all notes
    notes.getAll();
} else if (command === 'read') {
    // getNote to get a note using title as argument
    let note = notes.getNote(argv.title)
    // Check if note object is defined
    if(note) {
        console.log('Note found...')
        notes.logNote(note);
    } else {
        console.log('Note not found...')
    }
} else if (command === 'remove') {
    // removeNote method to remove note, takes title as argument
    let noteRemoved = notes.removeNote(argv.title);
    // Truthy is note not found
    let message = noteRemoved ? 'Note was removed...' : 'Note not found...'
    console.log(message);
} else {
    console.log('Command not found')
}
