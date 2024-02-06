// Importing the request module
const request = require('request');

// Function to retrieve the status code of a GET request to the provided URL
function getStatusCode(url) {
    // Sending a GET request to the URL
    request.get(url, function(error, response) {
        if (error) {
            // If there's an error, print it
            console.error('Error:', error);
        } else {
            // Print the status code
            console.log('code:', response.statusCode);
        }
    });
}

// Extracting the URL from the command line arguments
const url = process.argv[2];

// Calling the function with the provided URL
getStatusCode(url);
