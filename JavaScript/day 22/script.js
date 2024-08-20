// 1. Sum of Array Elements
function sumArrayElements(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}

// 2. Logging Array Elements with Index
function logArrayElements(arr) {
    arr.forEach((element, index) => {
        console.log(`Element at index ${index}: ${element}`);
    });
}

// 3. Calculate Product of Array Elements
function productArrayElements(arr) {
    return arr.reduce((product, element) => product * element, 1);
}

// 4. Merge Arrays of Objects
function mergeArrays(arr) {
    return arr.reduce((mergedArray, currentArray) => [...mergedArray, ...currentArray], []);
}

// 5. Implement a manual forEach function
function manualForEach(arr, func) {
    for(let i = 0; i < arr.length; i++) {
        func(arr[i], i, arr);
    }
}

// 6. Implement manual reduce function
function manualReduce(arr, reducer, initialValue) {
    let accumulator = initialValue === undefined ? arr[0] : initialValue;
    for(let i = initialValue === undefined ? 1 : 0; i < arr.length; i++) {
        accumulator = reducer(accumulator, arr[i], i, arr);
    }
    return accumulator;
}

// 7. Count the occurrence of each unique word
function countWords(arr) {
    let words = arr.join(' ').split(' ');
    return words.reduce((wordFrequencies, word) => {
        wordFrequencies[word] = (wordFrequencies[word] || 0) + 1;
        return wordFrequencies;
    }, {});
}
