// Hoisting is basically , the havascript itself pushes all the varaibale s and fucntion on top of their scope before the code execution 

// Hoisting is not a feature we use on purpose.
// It’s a behavior of the JavaScript engine that helps the language run by allocating memory before execution.
// Function hoisting is somewhat useful; variable hoisting (var) mostly causes bugs, which is why we use let and const today

// You can make us of fucntion even before you actually declare them 

console.log(a); // undefined
var a = 10;

console.log(b); //  Error: Cannot access 'b' before initialization
let b = 20;

let b;  // hoisted but in TDZ
console.log(b); //  Can't use before line of declaration
b = 20;
// Temporal Dead Zone (TDZ) = The time between when the variable is hoisted AND when it is initialized.
// let and const cannot be accessed in TDZ → gives error.

//-------------------------------------------------------------------------------------------------------------------------------
function sayHi() {
  console.log("Hello!");
}
sayHi(); // Works

// function sayHi() {
//   console.log("Hello!");
// }

// sayHello(); //  Error
// var sayHello = function() {
//   console.log("Hi");
// };

// var sayHello is hoisted but set to undefined.
//--------------------------------------------------------------------------------------------------------------------------------

