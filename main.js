var readlineSync = require('readline-sync');
// console.log("readline is working")
var num1 = readlineSync.question('what is your first number? ')

console.log(num1)

var num2 = readlineSync.question('what is your second number? ')

console.log(num2)

const operations = ['add', 'subtract', 'multiply', 'divide',];

const index = readlineSync.keyInSelect(operations, 'Please enter the operation to perform ');
// console.log(operations[index])
console.log(`operation ${operations[index]} is chosen`);

function add(num1, num2){

    return (parseInt(num1) + parseInt(num2))
}

if(operations[index] === 'add'){
    console.log(`the result of ${num1} + ${num2} is`, add(num1, num2))

}else if(operations[index] === 'subtract'){
    function subtract(num1, num2){
        return (parseInt(num1) - parseInt(num2))
    }
    console.log(`the result of ${num1} - ${num2} is`, subtract(num1, num2))


}else if(operations[index] === 'multiply'){
    function multiply(num1, num2){
        return (parseInt(num1) * parseInt(num2))
    }
    console.log(`the result of ${num1} * ${num2} is`, multiply(num1, num2))


}else{
    function divide(num1, num2){
        return (parseInt(num1) / parseInt(num2))
    }
    console.log(`the result of ${num1} / ${num2} is`, divide(num1, num2))

}

