// Function definition
function welcomeMessage(fullName) {
    return function() {
        alert('Welcome ' + fullName);
    }
}

// Creating variables with closures
let guillaume = welcomeMessage('Guillaume');
let alex = welcomeMessage('Alex');
let fred = welcomeMessage('Fred');

// Testing
guillaume();
alex();
fred();
