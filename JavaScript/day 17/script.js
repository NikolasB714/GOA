// 1. Merge Lists
function mergeLists(list1, list2) {
    return [...new Set([...list1, ...list2])];
}

// 2. List Comprehension
function squareList(list) {
    return list.map(x => x * x);
}

// 3. Filter Odd Numbers
function filterOddNumbers(list) {
    return list.filter(x => x % 2 !== 0);
}

// 4. Find Common Elements
function findCommonElements(list1, list2) {
    return list1.filter(value => list2.includes(value));
}

// 5. List Manipulation
function removeDuplicates(list) {
    return [...new Set(list)];
}

// 6. Merge Dictionaries
function mergeDictionaries(dict1, dict2) {
    return {...dict1, ...dict2};
}

// 7. Dictionary Comprehension
function squareDictionary(dict) {
    let result = {};
    for (let key in dict) {
        result[key] = dict[key] * dict[key];
    }
    return result;
}

// 8. Dictionary Keys to List
function dictionaryKeysToList(dict) {
    return Object.keys(dict);
}

// 9. Word Frequency Counter
function wordFrequencyCounter(text) {
    let words = text.split(' ');
    let frequency = {};
    for (let word of words) {
        if (frequency[word]) {
            frequency[word]++;
        } else {
            frequency[word] = 1;
        }
    }
    return frequency;
}

// 10. Dictionary Filtering by Value
function filterDictionaryByValue(dict, value) {
    let result = {};
    for (let key in dict) {
        if (dict[key] === value) {
            result[key] = dict[key];
        }
    }
    return result;
}
