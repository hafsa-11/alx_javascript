const request = require('request');

// Function to count the number of movies where the character "Wedge Antilles" is present
function countMoviesWithWedgeAntilles(apiUrl) {
    // Sending a GET request to the API URL
    request.get(apiUrl, function(error, response, body) {
        if (error) {
            // If there's an error, print it
            console.error('Error:', error);
            return;
        }

        // Parsing the response body to extract movie data
        let data;
        try {
            data = JSON.parse(body);
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            return;
        }

        // Check if the response body is an object and contains results
        if (!Array.isArray(data.results)) {
            console.error('Invalid response format: Missing results array');
            return;
        }

        // Counting the number of movies where Wedge Antilles is present
        const movies = data.results;
        let count = 0;
        movies.forEach(movie => {
            if (movie.characters.includes("https://swapi-api.alx-tools.com/api/people/18/")) {
                count++;
            }
        });

        // Printing the count
        console.log(count);
    });
}

// Extracting the API URL from the command line arguments
const apiUrl = process.argv[2];

// Calling the function with the provided API URL
countMoviesWithWedgeAntilles(apiUrl);
