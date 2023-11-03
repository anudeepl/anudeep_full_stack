/*
The forEach() method calls a function and iterates over the elements of an array. 
The forEach() method can also be used on Maps and Sets.
*/

let num= [42,51,26,36];
let sum=0;
num.forEach(n=>{
    sum+=n;
});
console.log(sum);
//////////////////////////////////////////////////////
let students = ['John', 'Sara', 'Jack'];
// using forEach
students.forEach(myFunction);
function myFunction(item, index, arr) {
    // adding strings to the array elements
    arr[index] = 'Hello ' + item;
}
console.log(students);
///////////////////////////////////////////////////////////

const arrayItems = ['item1', 'item2', 'item3'];
const copyItems = [];
// using forEach
arrayItems.forEach(function(item){
  copyItems.push(item);
})
console.log(copyItems);