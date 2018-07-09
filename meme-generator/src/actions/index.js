// Action type(s)
export const RECEIVE_MEMES = 'RECEIVED_MEMES';

// Action creator
function receiveMemes(json) {
    const { memes } = json.data;
    // Action
    return {
        type: RECEIVE_MEMES,
        memes
    };
}

// Action creator
function fetchMemesJson() {
    return fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
}
