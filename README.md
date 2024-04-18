Room Solver
This code provides solutions for three different rooms in a game. Each room has a unique challenge that requires JavaScript knowledge to solve.

Room 1
To solve Room 1, the player needs to find the most recent book from a list of books. The solution code fetches the list of books from a JSON file, finds the most recent book using the findMostRecentBook function, and displays the title of the book in the DOM.

Functions
findMostRecentBook: This function takes an array of books as an argument and returns the most recent book based on the published property.
Room 2
To solve Room 2, the player needs to find the common concepts between JavaScript and React. The solution code creates two sets of concepts, finds the intersection using the findIntersection function, and displays the common concepts in the DOM.

Functions
findIntersection: This function takes two sets as arguments and returns a new set containing the intersection of the two sets.
Room 3
To solve Room 3, the player needs to navigate a labyrinth using a set of directions. The solution code fetches the directions from a JSON file, navigates the labyrinth using the navigateLabyrinth function, and displays a message in the DOM upon successful completion.

Functions
navigateLabyrinth: This function takes an array of directions as an argument and navigates the labyrinth by logging each step in the console and returning a success message upon completion.
Usage
To use the code, include it in an HTML file and attach it to the DOM using the DOMContentLoaded event. The code will attach event listeners to the elements with the IDs solveRoom1, solveRoom2, and solveRoom3. When the player clicks on these elements, the corresponding room will be solved.

Notes
The code uses the fetch API to fetch data from JSON files.
The code uses the Set object to store unique values.
The code uses the reduce method to find the most recent book.
The code uses the filter method to find the intersection of two sets.
The code uses the Promise object to create a delay.
The code uses the textContent and innerHTML properties to update the DOM.
The code uses the console.error method to log errors.