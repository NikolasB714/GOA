// 1. Create an object person, with properties: name and age. 
// Use Object.assign to create a new object employee with additional property - position.
let person = {name: 'John', age: 30};
let employee = Object.assign({}, person, {position: 'Engineer'});
console.log(employee);

// 2. Merge two objects obj1 and obj2 into a new object using Object.assign.
let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
let mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj);

// 3. Copy properties from multiple source objects into a single target object using Object.assign.
let source1 = {a: 1, b: 2};
let source2 = {c: 3, d: 4};
let target = {};
Object.assign(target, source1, source2);
console.log(target);

// 4. Use Object.assign to clone an object original.
let original = {a: 1, b: 2};
let clone = Object.assign({}, original);
console.log(clone);

// 5. Merge properties of an object source into another object target using Object.assign.
let source = {a: 1, b: 2};
let target2 = {c: 3, d: 4};
Object.assign(target2, source);
console.log(target2);       


// 6. Merge arrays of objects into a single object using Object.assign.
let arr = [{a: 1}, {b: 2}, {c: 3}];
let mergedArr = Object.assign({}, ...arr);
console.log(mergedArr);

// 7. Use Object.assign to update properties of an existing object with new values.
let objToUpdate = {a: 1, b: 2};
let updates = {a: 10, c: 3};
Object.assign(objToUpdate, updates);
console.log(objToUpdate);

// 8. Implement a function extend that takes two objects and merges their properties using Object.assign.
function extend(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
console.log(extend({a: 1}, {b: 2}));

// 9. Create a manual function named manualAssign in JavaScript using the for...in loop, 
// define parameters for the target object and ...sources rest parameter, 
// iterate over each source object with a for...in loop, 
// and assign properties from each source to the target object.
function manualAssign(target, ...sources) {
    for (let source of sources) {
        for (let key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key];
            }   
        }
    }
    return target;
}
console.log(manualAssign({}, {a: 1}, {b: 2}));

// 10. Manually create a function named manualAssign2 in JavaScript utilizing the for...of loop, 
// define parameters for target and ...sources, loop through each source object, 
// iterate over keys within each source, and assign corresponding values to the target object.
function manualAssign2(target, ...sources) {
    for (let source of sources) {
        for (let key of Object.keys(source)) {
            target[key] = sou   [key];
        }
    }
    return target;
}
console.log(manualAssign2({}, {a: 1}, {b: 2}));
