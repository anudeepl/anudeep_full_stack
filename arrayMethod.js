const progLan = [];
progLan[0]= "Java";
progLan[1]= "Python";
progLan[2]= "C#";
console.log(progLan);
// Creating an array

const arr = ["a", "b", "c"];
arr[0] = "x";
console.log(arr);
// changing the element of an array using its index number where the value should be updated

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let z=fruits.toString();
console.log(z);
// Changing array to string

let d=fruits.length;
console.log(d);
// Gives the length of an array

let e=fruits.indexOf("Apple");
console.log(e);
// Gives the index number of the specified element of an array

let f=fruits.push("Lemon");
console.log(f);  //Adding lemon as a 5th element to the array
let h = fruits.toString();
console.log(h);//with above method forms string with this statment

let g=fruits.pop();
console.log(g);//Pop method will remove last element from the array
let j = fruits.toString();
console.log(j);//with above method forms a string with this statment

let k=fruits.shift();
console.log(k);//shift method will remove 1st element from the array
let l = fruits.toString();
console.log(l);//with above method forms a string with this statment

let q=fruits.unshift("Kiwi"); //unshift method will add element to 1st index of the array
console.log(q);
let w = fruits.toString(); //with above method forms a string with this statment
console.log(w);

let y=fruits.slice(2); //slice method will cutoff array into new array
console.log(y);
let r = fruits.toString(); //with above method forms a string with this statment
console.log(r);

const arg1=["a","b"];
const arg2=["c","d"];
const arg3=["e","f"];
let myArr=arg1.concat(arg2,arg3);
console.log(myArr);
