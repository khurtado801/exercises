console.log('Starting mode.js');

const fs = require('fs');

let addNote = (title, body) => {
    let notes = [];
    let note = {
        title: title,
        body: body
    };

    
    try {
        // Read contents of notes-data.json, which is a string, and save to notesString
        let notesString = fs.readFileSync('notes-data.json');
        // Parse file we read to convert to object and save in notes
        notes = JSON.parse(notesString);

    // Catch block error argument variable 'e'
    } catch (e) {

    }

    // Check notes array for duplicate note...
    let duplicateNotes = notes.filter((note) => {
        // If a title matches another title, return true and save it to array duplicateNotes
        return note.title === title;
    /* 
        Check notes array for duplicate note using ES6 arrow function
        let duplicateNotes = notes.filter((note) => note.title === title)
    */
    })
    // If length of duplicateNotes is greater than 0, that means we do not want to save the note. Because a note with that name already exists. If it is 0, save the note.
    if (duplicateNotes.length === 0) {
        // Add note to notes array at the end using push
        notes.push(note);
        // Update the file named notes-data.json with content to be saved json.stringify(notes) 
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
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