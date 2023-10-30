////////////////////////////////////////////////////////////////////

// Array Map 1
const numbers = [4, 9, 16, 25, 36];
function square(numbers) 
{
  return numbers * numbers; // n square value of numbers
}
let sqNum= numbers.map(square)
console.log(sqNum)

////////////////////////////////////////////////////////////////////

// Array Map 2
// let square_numbers = numbers.map(square);
// console.log(square_numbers);
const x = numbers.map(Math.sqrt) //Square root of the numbers
console.log(x);

////////////////////////////////////////////////////////////////////

// Array Map 3 using
const y= [65, 44, 12, 4]; 
function myFunction(p) 
{
  return p * 10;
}
const newArr1 = y.map(myFunction) 
console.log(newArr1)

////////////////////////////////////////////////////////////////////

// Array map using Arrow function
const c=numbers.map(x => x*2)
console.log(c);

/*----------------------------------------------------------------*/

// Array filter using function
const ages = [32, 33, 16, 40];
function checkAdult(age) 
{
  return age >= 18;
}
let agFil = ages.filter(checkAdult);
console.log("List of elements reached adult age: "+agFil);

////////////////////////////////////////////////////////////////////

// Array filter using Arrow function
const orArray = [1, 2, 3, 4];
let newArr2 = orArray.filter(number => number >= 3);
console.log(newArr2);

/*----------------------------------------------------------------*/

// Array Reduce using function
const numRed = [175, 50, 25];
let v = numRed.reduce(myFunc);
function myFunc(total, num) 
{
  return total - num;
}
console.log(v);

////////////////////////////////////////////////////////////////////

// Array Reduce using function
let redArr = numRed.reduce((prev, cur) => {
  return prev - cur;
});
console.log(redArr);

////////////////////////////////////////////////////////////////////



