/////////////////////////////////////////////////////////////////////

const x = ( x, y, z ) => { console.log( x + y * z ) } 
x( 10, 20, 30 );

/////////////////////////////////////////////////////////////////////

const y = () => { console.log( "Hi" ); } 
y();

/////////////////////////////////////////////////////////////////////

let sum = (a, b) => a + b;
/* This arrow function is a shorter form of:
let sum = function(a, b) {
  return a + b;
};
*/
console.log( sum(1, 2) ); // 3

/////////////////////////////////////////////////////////////////////

let double = n => n * 2; 
/* Without curly braces: (...args) => expression – the right side is an expression: the 
function evaluates it and returns the result. 
Parentheses can be omitted, if there’s only a single argument, e.g. n => n*2. */

// roughly the same as: let double = function(n) { return n * 2 }
console.log( double(3) ); // 6

/////////////////////////////////////////////////////////////////////




