//  --------------   JavaScript Array Methods -------------

// Converting Arrays to Strings
// The JavaScript method toString() converts an array to a string of (comma separated) array values.

// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString(); // Banana,Orange,Apple,Mango

// The join() method also joins all array elements into a string.

// It behaves just like toString(), but in addition you can specify the separator:

Example;
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits2.join(" * ");

// Merging (Concatenating) Arrays
// The concat() method creates a new array by merging (concatenating) existing arrays:

// Example (Merging Two Arrays)
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

// JavaScript Array splice()
// The splice() method can be used to add new items to an array:

// Example
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.splice(2, 0, "Lemon", "Kiwi");
// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// The splice() method returns an array with the deleted items:

const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.splice(2, 2, "Lemon", "Kiwi");
