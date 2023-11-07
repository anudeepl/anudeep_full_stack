/*
The for in loop in JavaScript allows you to iterate over all property keys of an object.
*/

const person = {fname:"John", lname:"Doe", age:25}; 
let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}
console.log(txt);