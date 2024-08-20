// Countdown Timer
let seconds = prompt("Enter a number representing seconds:");
while(seconds > 0) {
    console.log(seconds);
    seconds--;
}
console.log("Time's up!");

// Prime Number Printer
let primes = [];
let num = 1;
while(num <= 50) {
    let isPrime = true;
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if(isPrime) {
        primes.push(num);
    }
    num++;
}
console.log(primes);

// Object Information Display
let person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Developer"
};
console.log(person);

// Calculate Factorial
let number = prompt("Enter a non-negative integer:");
let factorial = 1;
for(let i = 1; i <= number; i++) {
    factorial *= i;
}
console.log(factorial);

// Array Summation
let numbers = prompt("Enter a series of numbers, separated by spaces:").split(' ').map(Number);
let sum = numbers.reduce((a, b) => a + b, 0);
console.log(sum);
