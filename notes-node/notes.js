console.log('Starting mode.js');

const fs = require('fs');

let fetchNotes = () => {
    try {
        // Read contents of notes-data.json, which is a string, and save to notesString
        let notesString = fs.readFileSync('notes-data.json');
        // Parse file we read to convert and return it to function
        return JSON.parse(notesString);

    // Catch block error argument variable 'e'
    } catch (e) {
        return [];
    }
};

let saveNotes = (notes) => {
    // Update the file named notes-data.json with content to be saved json.stringify(notes) 
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

let addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title: title,
        body: body
    };

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
        saveNotes(notes);
        // Return note to app.js 
        return note;
    }
};

let getAll = () => {
    console.log('Getting all notes');
}

let getNote = (title) => {
    console.log('Getting note', title);
}

let removeNote = (title) => {
    // Set notes equal to result of fetchNotes call
    let notes = fetchNotes();
    // Filter out notes...
    let filteredNotes = notes.filter((note) => {
        // Return notes where title is not equal to argument passed in
        return note.title !== title
    })
    if (filteredNotes.length < notes.length) {
        console.log('--');
        console.log('The note has been removed...')
    } else {
        console.log('--');
        console.log('Nothing to remove...')
    }
    // Call savedNotes with updated notes as argument
    saveNotes(filteredNotes);
}

module.exports = {
    // Export addNote, set the attribute addNote to the value of function addNote
    addNote: addNote,
    getAll: getAll,
    getNote: getNote,
    removeNote: removeNote
};