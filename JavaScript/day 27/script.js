// 1. Array Destructuring: Employ the rest operator to capture multiple elements of an array into a single variable.
let array = [1, 2, 3, 4, 5];
let [first, second, ...rest] = array;
console.log(rest); // Outputs: [3, 4, 5]

// 2. Collecting Function Arguments: Gather all remaining arguments into an array within a function.
function collectArgs(first, second, ...remainingArgs) {
    console.log(remainingArgs); // Outputs any arguments passed beyond the first two
}
collectArgs('a', 'b', 'c', 'd', 'e'); // Outputs: ['c', 'd', 'e']

// 3. Function Parameters: Use the rest parameter syntax (...args) within a function's parameter list to represent an indefinite number of arguments as an array.
function logArgs(...args) {
    console.log(args);
}
logArgs('Hello', 'World', '!'); // Outputs: ['Hello', 'World', '!']

// 4. Forwarding Arguments: Capture all arguments passed to a function and forward them dynamically to another function using the rest parameter.
function forwardArgs(fn, ...args) {
    fn(...args);
}
forwardArgs(console.log, 'Hello', 'World', '!'); // Outputs: 'Hello World !'

// 5. Object Destructuring: Utilize the rest operator in object destructuring to gather any remaining properties into a new object.
let obj = {a: 1, b: 2, c: 3, d: 4};
let {a, b, ...remainingProps} = obj;
console.log(remainingProps); // Outputs: {c: 3, d: 4}
