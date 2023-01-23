// Use the filter() method to remove all elements that are less than a certain number from an array of integers.

const arr = [3, 78, 44, 21, 16, 8, 50, 90, 482, 12, 38];

const less = arr.filter((el) => {
  return el > 20;
});
