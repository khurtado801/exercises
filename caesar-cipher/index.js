caesar = (str, key) => {
    let strInput = str.toLowerCase();
    let result = '';
    for (let i = 0; i < strInput.length; i++) {
        if(str.charCodeAt(i) === 32) {
            continue
        } else if ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 90)) {
            result += String.fromCharCode((str.charCodeAt(i) - 65 + key) % 26 + 65);
        } else if ((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 122)) {
            result += String.fromCharCode((str.charCodeAt(i) - 97 + key) % 26 + 97);
        }
        
    }
    return result;
}

console.log(caesar('The answer is 42', 13));
