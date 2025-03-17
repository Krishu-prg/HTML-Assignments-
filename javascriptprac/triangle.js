// Function to print a right-angled triangle pattern
function printTriangle(n) {
    // Outer loop controls the number of rows
    for (let i = 1; i <= n; i++) {
        let row = ""; // Initialize an empty string for the row
        // Inner loop adds '*' for the current row count
        for (let j = 1; j <= i; j++) {
            row += "*";
        }
        console.log(row); // Print the row
    }
}

// Example usage
printTriangle(5); // Prints a triangle with 5 rows
