// Fruit Basket
let fruits = [
    {name: "Apple", color: "Red"},
    {name: "Banana", color: "Yellow"},
    {name: "Grape", color: "Purple"}
];
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].name);
}

// Car Inventory
let cars = [
    {brand: "Toyota", model: "Corolla", year: 2020},
    {brand: "Honda", model: "Civic", year: 2021},
    {brand: "Ford", model: "Mustang", year: 2022}
];
for(let i = 0; i < cars.length; i++) {
    console.log(cars[i].brand, cars[i].model, cars[i].year);
}

// Shopping List
let shoppingList = [
    {name: "Milk", quantity: 2},
    {name: "Bread", quantity: 1},
    {name: "Eggs", quantity: 12}
];
for(let i = 0; i < shoppingList.length; i++) {
    console.log(shoppingList[i].name, shoppingList[i].quantity);
}

// Student Attendance Tracker
let students = [
    {name: "John", attendance: "Present"},
    {name: "Jane", attendance: "Absent"},
    {name: "Bob", attendance: "Present"}
];
for(let i = 0; i < students.length; i++) {
    console.log(students[i].name, students[i].attendance);
}

// Daily Planner
let tasks = [
    {description: "Finish homework", priority: "High"},
    {description: "Do laundry", priority: "Medium"},
    {description: "Buy groceries", priority: "Low"}
];
for(let i = 0; i < tasks.length; i++) {
    console.log(tasks[i].description, tasks[i].priority);
}
