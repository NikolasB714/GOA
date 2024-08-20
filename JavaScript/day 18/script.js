// 11. Factorial Function
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

// 12. Palindrome Checker
function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// 13. Anagram Checker
function isAnagram(str1, str2) {
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}

// 14. Sentence Reversal
function reverseSentence(sentence) {
    return sentence.split(' ').reverse().join(' ');
}

// 15. Simple To-Do List
let todoList = [];
function addToDo(item) {
    todoList.push(item);
}
function removeToDo(item) {
    let index = todoList.indexOf(item);
    if (index > -1) {
        todoList.splice(index, 1);
    }
}
function viewToDo() {
    return todoList;
}

// 16. Combining Lists into Dictionary
function listsToDict(keys, values) {
    let result = {};
    keys.forEach((key, i) => result[key] = values[i]);
    return result;
}

// 17. Dictionary Key Search
function hasKey(dict, key) {
    return key in dict;
}

// 18. Dictionary Value Aggregator
function aggregateValues(dict) {
    let result = {};
    for (let key in dict) {
        result[key] = dict[key].reduce((a, b) => a + b, 0);
    }
    return result;
}

// 19. Function to Split List by Value
function splitListByValue(list, value) {
    let lessThanValue = list.filter(x => x < value);
    let greaterThanOrEqualToValue = list.filter(x => x >= value);
    return [lessThanValue, greaterThanOrEqualToValue];
}

// 20. List Intersection Counter
function countCommonElements(list1, list2) {
    let set1 = new Set(list1);
    let set2 = new Set(list2);
    let intersection = new Set([...set1].filter(x => set2.has(x)));
    return intersection.size;
}
