// Function to generate and print the multiplication table
function multiplicationTable(n) {
    // Loop from 1 to 10 to generate multiplication table
    for (let i = 1; i <= 10; i++) {
        console.log(n + " x " + i + " = " + (n * i)); // Print multiplication result
    }
}

// Example usage
multiplicationTable(5); // Prints the multiplication table of 5
