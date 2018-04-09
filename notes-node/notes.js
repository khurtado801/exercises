console.log('Starting mode.js');

const fs = require('fs');

let addNote = (title, body) => {
    let notes = [];
    let note = {
        title: title,
        body: body
    };

    // Read contents of notes-data.json, which is a string, and save to notesString
    let notesString = fs.readFileSync('notes-data.json');
    // Parse file we read to convert to object and save in notes
    notes = JSON.parse(notesString);

    // Add note to notes array at the end using push
    notes.push(note);
    // Update the file named notes-data.json with content to be saved json.stringify(notes) 
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let getAll = () => {
    console.log('Getting all notes');
}

let getNote = (title) => {
    console.log('Getting note', title);
}

let removeNote = (title) => {
    console.log('Removing note', title)
}

module.exports = {
    // Export addNote, set the attribute addNote to the value of function addNote
    addNote: addNote,
    getAll: getAll,
    getNote: getNote,
    removeNote: removeNote
};