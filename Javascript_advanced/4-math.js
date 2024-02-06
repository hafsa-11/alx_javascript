// Function to create a closure for addition
function addBy(firstNumber) {
    return function(secondNumber) {
        return firstNumber + secondNumber;
    }
}

// Function to create a closure for division
function divideBy(firstNumber) {
    return function(secondNumber) {
        return secondNumber / firstNumber;
    }
}

// Creating closures
let addBy100 = addBy(100);
let addBy1000 = addBy(1000);
let divideBy10 = divideBy(10);
let divideBy100 = divideBy(100);

// Testing
console.log(addBy100(20));      // Output: 120
console.log(divideBy10(20));    // Output: 2
console.log(divideBy100(200));  // Output: 2
console.log(addBy1000(20));     // Output: 1020
