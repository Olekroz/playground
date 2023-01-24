// Use the forEach() method to print out each element of an array of strings.

const arr = ["dog", "bird", "elephant", "cat", "unicorn", "dragon", "hippogriff"];

// arr.forEach((el) => {
//   console.log(el);
// });

// const rev = arr.reverse();
// console.log(rev);
// console.log(arr);

const copy = [];

for (let i = arr.length - 1; i >= 0; i--) {
  copy.push(arr[i]);
}

console.log(copy);
console.log(arr);
