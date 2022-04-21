const bulbImage = document.getElementById("myImage");
// //  ?! bulbon
// const toggleButton = document.getElementById("toggleButton");
// toggleButton.addEventListener("click", () => {
//   if (bulbImage.src.match("bulbon")) {
//     bulbImage.src = "pic_bulbon.gif";
//   } else {
//     bulbImage.src = "pic_bulboff.gif";
//   }
// });

// const buttonOn = () => {
//   bulbImage.src = "pic_bulbon.gif";
// };
// const buttonOff = () => {
//   bulbImage.src = "pic_bulboff.gif";
// };

//ADD EVENT LISTENER TO THE BUTTONS
const buttonOn = document.getElementById("buttonOn");
buttonOn.addEventListener("click", () => {
  bulbImage.src = "pic_bulbon.gif";
});

const buttonOff = document.getElementById("buttonOff");
buttonOff.addEventListener("click", () => {
  bulbImage.src = "pic_bulboff.gif";
});

// var	Declares a variable
// let	Declares a block variable
// const	Declares a block constant
let a, b, c; // Declare 3 variables
a = 5; // Assign the value 5 to a
b = 6; // Assign the value 6 to b
c = a + b; // Assign the sum of a and b to c

// How to create variables:
var x;
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;

var u, e;
u = 5 + 6;
e = x * 10;

let m, g;
m = 5;
g = 6;

//  --------------   When to Use JavaScript const   --------------  ?
// If you want a general rule: always declare variables with const.

// If you think the value of the variable can change, use let.

// In this example, price1, price2, and total, are variables:

// Example;
const price1 = 5;
const price2 = 6;
let total = price1 + price2;

// The let keyword was introduced in ES6 (2015).

// Variables defined with let cannot be Redeclared.

// Variables defined with let must be Declared before use.

// Variables defined with let have Block Scope.

//  --------------  Block Scope  --------------
// Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

// ES6 introduced two important new JavaScript keywords: let and const.

// These two keywords provide Block Scope in JavaScript.

// Variables declared inside a { } block cannot be accessed from outside the block:
{
  let x = 2;
}
// x can NOT be used here

//  --------------  Redeclaring Variables --------------
// Redeclaring a variable using the var keyword can impose problems.

// Redeclaring a variable inside a block will also redeclare the variable outside the block:

// Example
var x = 10;
// Here x is 10

{
  var x = 2;
  // Here x is 2
}

// Here x is 2

// Redeclaring a variable using the let keyword can solve this problem.

// Redeclaring a variable inside a block will not redeclare the variable outside the block:

// --------------   Let Hoisting  -------------- //
// Variables defined with var are hoisted to the top and can be initialized at any time.

// Meaning: You can use the variable before it is declared:

// This is OK:

carName = "Volvo";
var carName;

// Variables defined with let are also hoisted to the top of the block, but not initialized.

// Meaning: Using a let variable before it is declared will result in a ReferenceError:

//   --------------  JavaScript Constants  --------------
// The const keyword was introduced in ES6 (2015).

// Variables defined with const cannot be Redeclared.

// Variables defined with const cannot be Reassigned.

// Variables defined with const have Block Scope.
