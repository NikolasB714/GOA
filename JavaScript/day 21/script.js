// 1. Sort
function sortKeys(dict) {
    return Object.keys(dict).sort();
}

// 2. Find Maximum or Minimum Value
function findMaxKey(dict) {
    let maxKey = Object.keys(dict).reduce((a, b) => dict[a] > dict[b] ? a : b);
    return maxKey;
}
function findMinKey(dict) {
    let minKey = Object.keys(dict).reduce((a, b) => dict[a] < dict[b] ? a : b);
    return minKey;
}

// 3. Combining Items
function combineDicts(dict1, dict2) {
    return {...dict1, ...dict2};
}

// 4. Check for Key Existence
function checkKey(dict, key) {
    return dict.hasOwnProperty(key);
}

// 5. Remove and Return Value
function popValue(dict, key) {
    let value = dict[key];
    delete dict[key];
    return value;
}

// 6. Create a function called manual_keys
function manual_keys(dict) {
    let keys = [];
    for(let key in dict) {
        keys.push(key);
    }
    return keys;
}

// 7. Create a function called manual_values
function manual_values(dict) {
    let values = [];
    for(let key in dict) {
        values.push(dict[key]);
    }
    return values;
}

// 8. Create a function called manual_items
function manual_items(dict) {
    let items = [];
    for(let key in dict) {
        items.push([key, dict[key]]);
    }
    return items;
}

// 9. Create a function called manual_get
function manual_get(dict, key, defaultValue = null) {
    return dict.hasOwnProperty(key) ? dict[key] : defaultValue;
}

// 10. Create a function called manual_pop
function manual_pop(dict, key, defaultValue = null) {
    if(dict.hasOwnProperty(key)) {
        let value = dict[key];
        delete dict[key];
        return value;
    } else {
        return defaultValue;
    }
}
