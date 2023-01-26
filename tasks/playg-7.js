// Convert an array of strings into a single string using the join() method with the delimiter - and print the result

const example = ["The", "cat", "likes", "to", "sleep"];

const oneText = (text) => {
  return text.join(" ");
};

console.log(oneText(example));
