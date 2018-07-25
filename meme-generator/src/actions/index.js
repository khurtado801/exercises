// Action type(s)
export const RECEIVE_MEMES = 'RECEIVED_MEMES';
export const NEW_MEME = 'NEW_MEME';

// Action creator
function receiveMemes(json) {
    const { memes } = json.data;
    // Action
    return {
        // Returned from action
        type: RECEIVE_MEMES,
        memes
    };
}

function fetchMemesJson() {
    return fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json());
}

// Action creator
export function fetchMemes() {
    return function(dispatch) {
        return fetchMemesJson()
            .then(json => dispatch(receiveMemes(json)));
    };
}

// Action creator
export function newMeme(meme) {
    // Return
    return {
        // Returned from action
        type: NEW_MEME
    };
}
