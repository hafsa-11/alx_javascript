const request = require('request');

// Function to print all characters of a Star Wars movie
function printCharacters(movieId) {
    // Constructing the API URL for the specified movie ID
    const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

    // Sending a GET request to the API URL
    request.get(apiUrl, function(error, response, body) {
        if (error) {
            // If there's an error, print it
            console.error('Error:', error);
        } else {
            // Parsing the response body to extract movie data
            const movieData = JSON.parse(body);

            // Extracting character URLs from the movie data
            const characterUrls = movieData.characters;

            // Looping through character URLs to fetch character names
            characterUrls.forEach(characterUrl => {
                // Sending a GET request to the character URL
                request.get(characterUrl, function(error, response, body) {
                    if (error) {
                        // If there's an error, print it
                        console.error('Error:', error);
                    } else {
                        // Parsing the response body to extract character data
                        const characterData = JSON.parse(body);
                        
                        // Printing the character name
                        console.log(characterData.name);
                    }
                });
            });
        }
    });
}

// Extracting the movie ID from the command line arguments
const movieId = process.argv[2];

// Calling the function with the provided movie ID
printCharacters(movieId);
