// let obj = {
//     name: 'Ken'
// };

// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

const fs = require('fs');

let originalNote = {
    title: 'Some title',
    body: 'Some body'
};
let originalNoteString = JSON.stringify(originalNote);

// Write a file to filesystem
// The first argument is file name notes.json, second argument is text content of originalNoteString
fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');
// Convert noteString back into object
let note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);