// 1. Sum of Array Elements
function sumArrayElements(arr) {
    let sum = 0;
    for(let num of arr) {
        sum += num;
    }
    return sum;
}

// 2. Longest Word in Array
function longestWord(arr) {
    let longest = '';
    for(let word of arr) {
        if(word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

// 3. Count Object Properties
function countProperties(obj) {
    let count = 0;
    for(let prop in obj) {
        count++;
    }
    return count;
}

// 4. Get Object Keys
function getObjectKeys(obj) {
    let keys = [];
    for(let key in obj) {
        keys.push(key);
    }
    return keys;
}


// 1. Square a Number
const square = num => num * num;

// 2. Filter Even Numbers
const filterEven = arr => arr.filter(num => num % 2 === 0);

// 3. Sum of Array Elements
const sumArray = arr => arr.reduce((sum, num) => sum + num, 0);

// 4. Generate Fibonacci Sequence
const fibonacci = length => {
    let sequence = [0, 1];
    for(let i = 2; i < length; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
};

// 5. Check if Palindrome
const isPalindrome = str => str === str.split('').reverse().join('');

// 6. Toggle Visibility
document.querySelector('button').addEventListener('click', () => {
    let element = document.querySelector('#element');
    element.style.display = (element.style.display === 'none') ? 'block' : 'none';
});
