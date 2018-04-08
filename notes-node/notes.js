console.log('Starting mode.js');

let addNote = (title, body) => {
    console.log('Adding note', title, body);
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