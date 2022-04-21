//  --------------   JavaScript Sorting Arrays -------------
//  --------------   by:  Adrian George  --------------------

// Sorting an Array
// The sort() method sorts an array alphabetically:

// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // Sorts the array in ascending order

// Reversing an Array
// The reverse() method reverses the elements in an array.

// You can use it to sort an array in descending order:

// Example
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.sort();
fruits2.reverse();

// Numeric Sort
// By default, the sort() function sorts values as strings.

// This works well for strings ("Apple" comes before "Banana").

// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce incorrect result when sorting numbers.

// You can fix this by providing a compare function:

// Example
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});

// Sorting Object Arrays
// JavaScript arrays often contain objects:

// Example
// const cars = [
//   {type:"Volvo", year:2016},
//   {type:"Saab", year:2001},
//   {type:"BMW", year:2010}
// ];
// Even if objects have properties of different data types, the sort() method can be used to sort the array.

// The solution is to write a compare function to compare the property values:

// Example
cars.sort(function (a, b) {
  return a.year - b.year;
}); // Sorts the array in ascending order by year
