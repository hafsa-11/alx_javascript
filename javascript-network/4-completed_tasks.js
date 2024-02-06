const request = require('request');

// Function to compute the number of tasks completed by user id
function computeCompletedTasks(apiUrl) {
    // Sending a GET request to the API URL
    request.get(apiUrl, function(error, response, body) {
        if (error) {
            // If there's an error, print it
            console.error('Error:', error);
        } else {
            // Parsing the response body to extract task data
            const tasks = JSON.parse(body);

            // Object to store the number of completed tasks by user id
            const completedTasksByUserId = {};

            // Looping through tasks to count completed tasks by user id
            tasks.forEach(task => {
                if (task.completed) {
                    if (completedTasksByUserId.hasOwnProperty(task.userId)) {
                        completedTasksByUserId[task.userId]++;
                    } else {
                        completedTasksByUserId[task.userId] = 1;
                    }
                }
            });

            // Printing the result
            console.log(completedTasksByUserId);
        }
    });
}

// Extracting the API URL from the command line arguments
const apiUrl = process.argv[2];

// Calling the function with the provided API URL
computeCompletedTasks(apiUrl);
