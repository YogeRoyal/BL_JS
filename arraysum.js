//Program to find Sum of Elements of Array
const readline = require('readline-sync');
const len = readline.questionInt("Enter the Number of Elements: ");
const array = new Array()
var sum = 0
for (var i = 0; i < len; i++) {
    array[i]=readline.questionInt("Enter Elements of the Array: ")
    sum += array[i]
}
console.log("Sum of Elements is "+sum)