//create a unique array from the arrays

function createUniqueArray() {
    const readline = require('readline-sync');
    var array1 = readline.question("Enter elements for the first array, separated by commas:").split(',');
    var array2 = readline.question("Enter elements for the second array, separated by commas:").split(',');

    // Concatenate the arrays
    var combinedArray = array1.concat(array2);

    // Create a Set to automatically remove duplicates
    var uniqueArray = [...new Set(combinedArray)];

    alert("Unique array: " + uniqueArray.join(', '));
  }

  
  createUniqueArray();