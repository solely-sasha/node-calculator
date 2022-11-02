var readlineSync = require('readline-sync');
// console.log("readline is working")
var num1 = readlineSync.question('what is your first number? ')

console.log(num1)

var num2 = readlineSync.question('what is your second number? ')

console.log(num2)

const operations = ['add', 'subtract', 'multiply', 'divide',];

const index = readlineSync.keyInSelect(operations, 'Please enter the operation to perform ');
// console.log(operations[index])
