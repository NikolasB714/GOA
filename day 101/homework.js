function addNumbers(a, b) {
    return a + b;
  }

function reverseString(str) {
    return str.split('').reverse().join('');
  }
function isEven(num) {
  return num % 2 === 0;
}

const arrayLength = arr => arr.length;

const rectangleArea = (width, height) => width * height;

function doubleArray(arr) {
    return arr.map(num => num * 2);
  }

function toUpperCase(str) {
    return str.toUpperCase();
  }

const filterOdd = arr => arr.filter(num => num % 2 === 1);

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }

const countVowels = str => str.match(/[aeiou]/gi)?.length || 0;
      