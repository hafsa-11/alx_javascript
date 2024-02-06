// Importing the request module
const request = require('request');

// Function to retrieve the title of a Star Wars movie based on the movie ID
function getMovieTitle(movieId) {
    // Constructing the URL with the provided movie ID
    const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

    // Sending a GET request to the URL
    request.get(url, function(error, response, body) {
        if (error) {
            // If there's an error, print it
            console.error('Error:', error);
        } else {
            // Parsing the response body to extract the title
            const movie = JSON.parse(body);
            const title = movie.title;

            // Printing the title
            console.log(title);
        }
    });
}

// Extracting the movie ID from the command line arguments
const movieId = process.argv[2];

// Calling the function with the provided movie ID
getMovieTitle(movieId);
