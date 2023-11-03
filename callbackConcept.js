/* 
A callback function is one of the superpowers of JavaScript. 
It is the way JavaScript passes a function into another function as an argument. 
The callback function is called in the outer function to execute an action.

Arguments in JavaScript are values that are passed to the parameters of a function. 
They are accessible only in the function they are passed into when that function is called. 
Think of parameters as variables that are used to hold values in a function.
*/

//For example: showing a pop-up message welcoming a user after the user inputs a username.

/*
function greetings(username) {
  console.log('Welcome ' + username);
}
//the function declaration above is to be passed into the function below thereby making it a callback function.

function saveUserName(callback) {
  var name = prompt('Please enter your username:');
  callback(username);
}
//the above function states the callback function as a parameter

saveUserName(greetings);
*/

function greet(name, callback){
  console.log("Hi"+" "+name)
  callback();
}
function callme(){
  console.log("I am Call Back Function");
}
greet("Anudeep", callme)