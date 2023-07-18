const readlineSync = require('readline-sync');
console.log("1- Addition");
console.log("2- Subtraction");
console.log("3- Multiplication");
console.log("4- Division");
const operation = parseInt(readlineSync.question('Select the Operation : '))
const num1 = parseFloat(readlineSync.question('Enter the first Number : '))
const num2 = parseFloat(readlineSync.question('Enter the second Number : '))
switch (operation) {
    case 1:
        sum = num1 + num2
        console.log(`sum of ${num1} + ${num2} = ${sum}`);
        break;
    case 2:
        sum = num1 - num2
        console.log(`sum of ${num1} - ${num2} = ${sum}`);
        break;
    case 3:
        sum = num1 * num2
        console.log(`sum of ${num1} * ${num2} = ${sum}`);
        break;
    case 4:
        sum = num1 / num2
        console.log(`sum of ${num1} / ${num2} = ${sum}`);
    default:
        console.log("Undefined Operation");
        break;
}