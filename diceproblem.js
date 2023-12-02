//Roll the dice many times and store the value and count how many times the value is repated
const readline = require('readline-sync');
const len = readline.questionInt("Enter How many times you want to Roll the Dice: ");
let arr = new Array
for (let i = 0; i < len; i++) {
    let x = Math.floor(Math.random()*(7-1))+1
    arr.push(x)
}
console.log(arr);
let count = {}
for(let ele of arr){
    if (count[ele]) {
        count[ele] += 1
    } else {
        count[ele] = 1
    }
}
console.log(count);