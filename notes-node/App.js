const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const argv = yargs
    .command('add', 'Add a new note', {
        title: {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        },
        body: {
            describe: 'Body of note',
            demand: true,
            alias: 'b'
        }
    })
    .help()
    .argv;
// Set command equal to argv and grab the first element in array which is the title
let command = argv._[0];


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
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    // allNotes.forEach((note) => {
    //     notes.logNote(note);
    // })
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    // getNote to get a note using title as argument
    let note = notes.getNote(argv.title)
    // Check if note object is defined
    if (note) {
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