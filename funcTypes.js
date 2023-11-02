/////////////////////////////////////////////////////////////////////

/*A function in JavaScript is a block of code that contains a group of instructions to perform a particular task.*/
/*groups a number of program statements in a single unit*/
/*Functions allow us to encapsulate a block of code and reuse it multiple times.*/
/*A function does not execute until it is called.*/
/*When a function gets called, the code inside the function executes.*/

/* 
Types of Functions in JS
1 -> Named / Regular Function
2 -> Anonymus Function
3 -> User Defined Functions - return & Paramerized
4 -> Function Expression 
5 -> Arrow functions
6 -> Generator functions
7 -> Async functions
8 -> Constructor functions
9 -> Immediately Invoked Function Expression (IIFE)
10 -. Nested Functions
*/

/////////////////////////////////////////////////////////////////////

//1 -> Named / Regular Function

/* Syntax - 
const functionName = function namedFunction(parameters) {
     function body
  };
*/

//Type1
let newFunc = axz(4, 3);
function axz(a, b) {
// Function returns the product of a and b
  return a * b;
}
console.log(newFunc)

//Type2
function returnSum(first1, second2)
        {
          var sum = first1 + second2;
          return sum;
        }
      var firstNo = 78;
      var secondNo = 22;
      console.log(firstNo + " + " + secondNo + " = " + returnSum(firstNo,secondNo));

/////////////////////////////////////////////////////////////////////

//2 -> Anonymus Function

// An anonymous function is a function without a name.
/* An anonymous function is not accessible after its initial creation. 
Therefore, you often need to assign it to a variable. */

//Type1
let show = function() {
    console.log('Anonymous function');
};
show();

//Type2
var x = function (a, b) {
    console.log(a + b)
}
x(3, 5)//15

/////////////////////////////////////////////////////////////////////

//3 -> User Defined Functions

/*You can pass values to a function using parameters. 
A function can have one or more parameters, and the values will be passed by the calling code.*/

// Function Parameters

function nameDetails(firstName, lastName) {
    console.log("Hello " + firstName + " " + lastName);
}
nameDetails("Steve", "Jobs", "Mr."); // display Hello Steve Jobs, additional arguments will be ignored.
nameDetails("Bill"); // display Hello Bill undefined
nameDetails(); // display Hello undefined undefined

// Return a Value From a Function

//Type 1
function getNumber() {
    return 10;
};
let result1 = getNumber();
console.log(result1); //output: 10

//Type 2
function Sum(num1, num2) {
    return num1 + num2;
};
var result2 = Sum(10,20);
console.log(result2); //output: 30

/////////////////////////////////////////////////////////////////////

//4 -> Function Expression

/*A function expression in JavaScript is a function that is stored as a value, 
and can be assigned to a variable or passed as an argument to another function.
*/

var add = function (num1, num2) {
    return num1 + num2;
};
var result = add(10, 20);//returns 30

/////////////////////////////////////////////////////////////////////

//5 -> Arrow functions

// Arrow functions are a shorthand syntax for defining anonymous functions in JavaScript.

//Type1
const paraArrow = ( x, y, z ) => { console.log( x + y * z ) } 
paraArrow( 10, 20, 30 );

//Type2
const y = () => { console.log( "Hi" ); } 
y();

//Type3
let sum = (a, b) => a + b;
console.log( sum(1, 2) ); // 3

//Type4
let double = n => n * 2; 
console.log( double(3) ); // 6

/////////////////////////////////////////////////////////////////////

//6 -> Generator functions

/* ES6 introduces a new kind of function that is different from a regular function: 
function generator or generator.

A generator can pause midway and then continues from where it paused. its synntax is as follows
function* generatorFunction() {
  Generator function body
  yield value1;
  yield value2;
}

*/

function * generatorFunction() { // Line 1
    console.log('This will be executed first.');
    yield 'Hello, ';             // Line 2
    console.log('I will be printed after the pause');  
    yield 'World!';
  }

  let myGen = generatorFunction();
  console.log(myGen.next().value);  
console.log(myGen.next().value); 

/////////////////////////////////////////////////////////////////////

//7 -> Async functions



/////////////////////////////////////////////////////////////////////

//8 -> Constructor functions

/*
A constructor is a special function that creates and initializes an object instance of a class. 
In JavaScript, a constructor gets called when an object is created using the "new" keyword.
The Javascript Function Constructor creates a function that has a global scope.
When 'this' keyword is used in a constructor, it refers to the newly created object.

The purpose of a constructor is to create a new object and set values for any existing object properties. */

//Sample Constructor1 with single object
function consSample1() {  
  this.name = 'Al';
}                             // constructor function
var cS1 = new consSample1();  // create object
console.log(cS1.name)              // access properties

//Sample Constructor2 with multiple objects
function consSample2() {
this.name = 'Ram';
this.age = '23';
}
var cS21 = new consSample2();
var cS22 = new consSample2();
console.log(cS21.name+" attain the age of "+cS22.age+" this  year.")

 
//Sample Constructor3 with multiple parameters & objects
function consSample3 (name, age) {
    this.name = name;
    this.age = age;
}
var cS31 = new consSample3('Anudeep', 25);
var cS32 = new consSample3('Lakkoju', 27);
console.log(cS31.name);
console.log(cS32.age);

////////////////////////////////////////////////////////////////////