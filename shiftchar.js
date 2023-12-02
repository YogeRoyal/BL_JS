//Program to Shift each character by 1 position. 
const readline = require('readline-sync');
// const str = readline.question("Enter a String: ");
// const str1 = str.split("")
// for (var i = 0;i<str1.length;i++) {

    
// }
// console.log(str1.join(""))
// const s="a"
// const str3=s.charCodeAt();
// console.log(str3);

const str = readline.question("Enter the string: ");
const str1=str.split('');
console.log(str1);
let st=[]
let a;
for(let i=0;i<str1.length;i++){
    let str2=str1[i].charCodeAt()+1;
    console.log();
    s=String.fromCharCode(str2);
    console.log(st);
    const b=st.push(s)
a=b

}
console.log(a);
