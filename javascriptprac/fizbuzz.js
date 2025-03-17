// Function to print numbers from 1 to 20 with FizzBuzz logic
function fizzBuzz() {
    for (let i = 1; i <= 20; i++) {
        // Check if the number is divisible by both 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz"); // Print "FizzBuzz"
        }
        // Check if the number is divisible by 3 only
        else if (i % 3 === 0) {
            console.log("Fizz"); // Print "Fizz"
        }
        // Check if the number is divisible by 5 only
        else if (i % 5 === 0) {
            console.log("Buzz"); // Print "Buzz"
        }
        // If none of the above conditions match, print the number
        else {
            console.log(i);
        }
    }
}

// Run the function
fizzBuzz(); // Prints numbers 1 to 20 with FizzBuzz replacements
