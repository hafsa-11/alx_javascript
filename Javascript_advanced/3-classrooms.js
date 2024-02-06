// Function definition
function createClassRoom(numbersOfStudents) {
    // Function definition inside createClassRoom
    function studentSeat(seat) {
        return function() {
            return seat;
        }
    }

    // Array to hold students
    let students = [];

    // Populate students array
    for (let i = 0; i < numbersOfStudents; i++) {
        students.push(studentSeat(i + 1));
    }

    // Return the students array
    return students;
}

// Closure classRoom
let classRoom = createClassRoom(10);

// Testing
console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
