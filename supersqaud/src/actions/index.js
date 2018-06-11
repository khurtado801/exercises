// Action type
export const ADD_CHARACTER = 'ADD_CHARACTER';

// Action creator
export function addCharacterById(id) {
    // Action object, or just action
    const action = {
        type: ADD_CHARACTER,
        id
    };
}
