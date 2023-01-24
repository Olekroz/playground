// Use the sort() method to sort an array of strings alphabetically in ascending order.

const arr = ["dog", "bird", "elephant", "cat", "unicorn", "dragon", "hippogriff"];

// const sorted = arr.sort();

const names = [
  {
    name: "Tomasz",
    surname: "Kowalski",
  },
  {
    name: "Adam",
    surname: "Żelazko",
  },
  {
    name: "Czesław",
    surname: "Nowak",
  },
  {
    name: "Jakub",
    surname: "Kowalski",
  },
  {
    name: "Tomasz",
    surname: "Kowalski",
  },
];

const sorted = names.sort((a, b) => a.surname.localeCompare(b.surname));

console.log(sorted);
