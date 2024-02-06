// Importing the required modules
const request = require('request');
const fs = require('fs');

// Function to get the contents of a webpage and store it in a file
function requestAndStore(url, filePath) {
    // Sending a GET request to the URL
    request.get(url, function(error, response, body) {
        if (error) {
            console.error('Error:', error);
        } else {
            // Writing the response body to the file
            fs.writeFile(filePath, body, 'utf-8', function(err) {
                if (err) {
                    console.error('Error writing file:', err);
                } else {
                    console.log('File saved successfully:', filePath);
                }
            });
        }
    });
}

// Extracting the URL and file path from the command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Calling the function with the provided URL and file path
requestAndStore(url, filePath);
