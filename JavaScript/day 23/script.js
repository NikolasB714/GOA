    // Helper function to check if a number is prime
function isPrime(num) {
    for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

// every
function allPositive(arr) {
    return arr.every(num => num > 0);
}

function allNonEmptyStrings(arr) {
    return arr.every(str => str.length > 0);
}

function allTrue(arr) {
    return arr.every(bool => bool === true);
}

function allEven(arr) {
    return arr.every(num => num % 2 === 0);
}

function manualEvery(arr, func) {
    for(let i = 0; i < arr.length; i++) {
        if(!func(arr[i], i, arr)) return false;
    }
    return true;
}

// some
function hasPassingGrades(arr, passingGrade) {
    return arr.some(grade => grade >= passingGrade);
}

function containsAdminUsers(arr) {
    return arr.some(user => user.role === 'admin');
}

function hasOverdueItems(arr) {
    return arr.some(item => item.overdue === true);
}

function includesPrimeNumbers(arr) {
    return arr.some(num => isPrime(num));
}

function manualSome(arr, func) {
    for(let i = 0; i < arr.length; i++) {
        if(func(arr[i], i, arr)) return true;
    }
    return false;
}

// find
function findFirstNegativeNumber(arr) {
    return arr.find(num => num < 0);
}

function findUserById(arr, id) {
    return arr.find(user => user.id === id);
}

function findFirstIncompleteTask(arr) {
    return arr.find(task => task.complete === false);
}

function findProductByName(arr, name) {
    return arr.find(product => product.name === name);
}

function manualFind(arr, func) {
    for(let i = 0; i < arr.length; i++) {
        if(func(arr[i], i, arr)) return arr[i];
    }
    return undefined;
}

// findIndex
function findIndexOfFirstPrimeNumber(arr) {
    return arr.findIndex(num => isPrime(num));
}

function findIndexOfAdminUser(arr) {
    return arr.findIndex(user => user.role === 'admin');
}

function findIndexOfFirstOverdueItem(arr) {
    return arr.findIndex(item => item.overdue === true);
}

function findIndexOfOutOfStockProduct(arr) {
    return arr.findIndex(product => product.inStock === false);
}
