// const readline = require('readline-sync');

// const str1 = readline.question("Enter the first string: ");
// // const str2 = readline.question("Enter the second string: ");
// const str2=str1.split('');
// const str3=str2.sort();
// const str4=str3.join('');
// console.log(str4);

const readline = require('readline-sync');

const str1 = readline.question("Enter the numbers with spaces: ");
// const str2 = readline.question("Enter the second string: ");
const str2=str1.split(' ');
const str3=str2.sort();
const str4=str3.join(' ');
console.log(str4);
