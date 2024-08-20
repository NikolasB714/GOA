// 1. Create a copy function of map called manualMap
function manualMap(array, transform) {
    let result = [];
    for(let element of array)
        result.push(transform(element));
    return result;
}

// 2. Create a copy function of filter called manualFilter
function manualFilter(array, test) {
    let passed = [];
    for(let element of array)
        if(test(element)) passed.push(element);
    return passed;
}

// 3. Return a new list with all the words in the capitalize option
function capitalizeNames(names) {
    return names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
}

// 4. Return a new list containing only names that start with an uppercase letter and are no longer than 5
function filterNames(names) {
    return names.filter(name => name[0] === name[0].toUpperCase() && name.length <= 5);
}

// 5. Return a new list containing only multiples of 5 greater than 20
function filterMultiples(numbers) {
    return numbers.filter(number => number % 5 === 0 && number > 20);
}
