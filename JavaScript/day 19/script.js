// 1. Transforming Data
function getNames(people) {
    return people.map(person => person.name);
}

// 2. Prime or not
function isPrime(num) {
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
}
function checkPrimes(numbers) {
    return numbers.map(isPrime);
}

// 3. Filtering Data
function getPassingStudents(students, threshold) {
    return students.filter(student => student.grade > threshold);
}

// 4. Finding Specific Values
function getJpgFiles(files) {
    return files.filter(file => file.endsWith('.jpg'));
}

// 5. Create a copy function of map
function mapCopy(array, transform) {
    let result = [];
    for(let element of array)
        result.push(transform(element));
    return result;
}

// 6. Create a copy function of filter
function filterCopy(array, test) {
    let passed = [];
    for(let element of array)
        if(test(element)) passed.push(element);
    return passed;
}
