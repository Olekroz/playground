// Use the map() method to convert an array of strings to uppercase

// convert string to uppercase only when string is more than 5 characters long

const arr = ["dog", "bird", "elephant", "cat", "unicorn", "dragon", "hippogriff"];

const up = arr.map((el) => {
  if (el.length > 5) {
    return el.toUpperCase();
  } else {
    return "the animal name has less than 5 letters";
  }
});

console.log(up);
