/* 
-> Closure is the combination of a function bundled together (enclosed) 
with references to its surrounding state (the lexical environment). 

-> In other words, a closure gives you access to an outer function's scope from an inner function.
*/

// Closure Function

function OuterFunction() {
    var outerVariable = 100;
    function InnerFunction() {
        console.log(outerVariable);
    }
    return InnerFunction;
}
var innerFunc = OuterFunction();

innerFunc(); // 100





































