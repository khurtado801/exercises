import characters_json from '../data/characters.json';
import { ADD_CHARACTER } from '../actions';


function characters (state = characters_json, action) {
    switch (action.type) {
        case ADD_CHARACTER:
            // Create new characters array
            let character = state.filter(item => item.id !== action.id);
                return characters;
        default:
            return state;
    }
}

export default characters;
