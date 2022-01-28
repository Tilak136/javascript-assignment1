 
const n = prompt("Enter the number you want to check: ");

if (n >= 0) {
    if (n == 0) {
        console.log("The number you have entered is zero");
    } else {
        console.log("The number you have entered is positive");
    }
} else {
    console.log("The number you have entered is negative");
}