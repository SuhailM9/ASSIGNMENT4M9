const readlineSync = require('readline-sync');
const number = parseInt(readlineSync.question(`Enter a number : `));
for (i = 2; i < number; i++) {
}
if (number % i === 0) {
    console.log("Entered number is a Prime Number");
} else {
    console.log("Entered number is not a Prime Number");
}