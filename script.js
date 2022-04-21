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

// When to Use JavaScript const?
// If you want a general rule: always declare variables with const.

// If you think the value of the variable can change, use let.

// In this example, price1, price2, and total, are variables:

Example;
const price1 = 5;
const price2 = 6;
let total = price1 + price2;
