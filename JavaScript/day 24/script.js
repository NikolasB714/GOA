// indexOf
function indexOfCharacter(str, char) {
    return str.indexOf(char);
}

function indexOfNumber(arr, num) {
    return arr.indexOf(num);
}

function indexOfSubstring(str, substring) {
    return str.indexOf(substring);
}

function indexOfObject(arr, prop, value) {
    return arr.findIndex(obj => obj[prop] === value);
}

function manualIndexOf(arr, element) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === element) return i;
    }
    return -1;
}

// lastIndexOf
function lastIndexOfCharacter(str, char) {
    return str.lastIndexOf(char);
}

function lastIndexOfPrime(arr) {
    let lastIndex = -1;
    for(let i = 0; i < arr.length; i++) {
        if(isPrime(arr[i])) lastIndex = i;
    }
    return lastIndex;
}

function lastIndexOfWord(arr, word) {
    let lastIndex = -1;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === word) lastIndex = i;
    }
    return lastIndex;
}

function lastIndexOfActiveUser(arr) {
    let lastIndex = -1;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].isActive) lastIndex = i;
    }
    return lastIndex;
}
