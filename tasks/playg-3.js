// Use the map() method to square each element of an array of numbers and assign the returned value to a new variable.

const arr = [2, 3, 5, 10, 12, 27];

// const square = arr.map((el) => {
//   const squared = Math.pow(el, 2);
//   return squared;
// });

const square = arr.map((el) => el * el);
