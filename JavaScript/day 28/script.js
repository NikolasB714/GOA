let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [...array1, ...array2];
console.log(array3); // [1, 2, 3, 4, 5, 6]

let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
let mergedObj = {...obj1, ...obj2};
console.log(mergedObj); // {a: 1, b: 2, c: 3, d: 4}

let array = [1, 2, 3];
let modifiedArray = [...array, 4, 5];
console.log(modifiedArray); // [1, 2, 3, 4, 5]

