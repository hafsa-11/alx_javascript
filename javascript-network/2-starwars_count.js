const request = require('request');

// Function to count the number of movies where the character "Wedge Antilles" is present
function countMoviesWithWedgeAntilles(apiUrl) {
    // Sending a GET request to the API URL
    request.get(apiUrl, function(error, response, body) {
        if (error) {
            // If there's an error, print it
            console.error('Error:', error);
        } else {
            // Parsing the response body to extract movie data
            const movies = JSON.parse(body);

            // Counting the number of movies where Wedge Antilles is present
            let count = 0;
            movies.forEach(movie => {
                if (movie.characters.includes("https://swapi-api.alx-tools.com/api/people/18/")) {
                    count++;
                }
            });

            // Printing the count
            console.log(count);
        }
    });
}

// Extracting the API URL from the command line arguments
const apiUrl = process.argv[2];

// Calling the function with the provided API URL
countMoviesWithWedgeAntilles(apiUrl);
