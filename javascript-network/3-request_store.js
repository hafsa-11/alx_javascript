const request = require('request');
const fs = require('fs');

// Function to get the contents of a webpage and store it in a file
function requestAndStore(url, fileName) {
    request.get(url, function(error, response, body) {
        if (error) {
            console.error('Error:', error);
            return;
        }

        // Writing the response body to the file
        fs.writeFile(fileName, body, 'utf-8', function(err) {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log('File saved successfully:', fileName);

            // Print the content of the file for verification
            fs.readFile(fileName, 'utf-8', function(err, data) {
                if (err) {
                    console.error('Error reading file:', err);
                    return;
                }
                console.log('File content:');
                console.log(data);
            });
        });
    });
}

// Extracting URL and file name from command line arguments
const url = process.argv[2];
const fileName = process.argv[3];

// Calling the function with provided URL and file name
requestAndStore(url, fileName);
