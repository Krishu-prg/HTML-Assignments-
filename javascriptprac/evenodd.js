// Function to check if a number is even or odd
function checkEvenOrOdd(num) {
    // Check if the number is divisible by 2
    if (num % 2 === 0) {
        console.log(num + " is an even number."); // Print if even
    } else {
        console.log(num + " is an odd number."); // Print if odd
    }
}

// Example usage
checkEvenOrOdd(7); // Expected output: "7 is an odd number."
checkEvenOrOdd(8); // Expected output: "8 is an even number."
