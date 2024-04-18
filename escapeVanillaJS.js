document.addEventListener("DOMContentLoaded", () => {
  // Fix: Correct ID used for attaching the event listener
  document.getElementById("solveRoom1").addEventListener("click", () => {
    fetch("books.json")
      .then((response) => response.json())
      .then((books) => {
        const mostRecentBook = findMostRecentBook(books);
        // Fix: Correct element ID
        document.getElementById(
          "room1Result"
        ).textContent = `The key to the next room is: ${mostRecentBook.title}`;
      });
  });
});

document.getElementById("solveRoom2").addEventListener("click", () => {
  const jsConcepts = new Set(["closure", "scope", "hoisting"]);
  const reactConcepts = new Set(["components", "jsx", "hooks", "async"]);
  // Fix: Correct function call
  const commonConcepts = findIntersection(jsConcepts, reactConcepts);
  document.getElementById(
    "room2Result"
  ).textContent = `The code to unlock the door is: async ${Array.from(
    commonConcepts
  ).join(", ")}`;
});

// Fixed: Asynchronous function
document.getElementById("solveRoom3").addEventListener("click", async () => {
  try {
    // Fetch data from 'directions.json'
    const response = await fetch("directions.json");

    // Check if the fetch was successful
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the response as JSON
    const directions = await response.json();

    // Navigate the labyrinth using the fetched directions
    const message = await navigateLabyrinth(directions);

    // Fixed: Incorrect method
    // Update the innerHTML of the element with id 'room3Result'
    document.getElementById("room3Result").innerHTML = message;
  } catch (error) {
    // Log any errors that occur during the fetch or navigation process
    console.error("Error:", error);
  }
});

function findMostRecentBook(books) {
  // Fixed: Logic error
  return books.reduce(
    (mostRecent, book) =>
      new Date(book.published) > new Date(mostRecent.published)
        ? book
        : mostRecent,
    { published: "0001-01-01T00:00:00Z" }
  );
}

function findIntersection(setA, setB) {
  // Fixed: Incorrect logic
  const intersection = new Set([...setA].filter((x) => setB.has(x)));
  return intersection;
}

async function navigateLabyrinth(directions) {
  for (let direction of directions) {
    // Fixed: No delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`Navigating: ${direction.step}`);
  }
  return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}
