// count char in string and do not consider 
const readline = require('readline-sync');
const str = readline.question("Enter the string: ");
function countCharactersWithoutSpaces(str)
{
    let count = 0;
    for (let i = 0; i < str.length; i++) //hi i     // Check if the current character is not a space
    {
    if (str[i] !== ' ') //h
    {
        count++;
    }
    }
    return count;
}
console.log(countCharactersWithoutSpaces(str));