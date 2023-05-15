const arr = [
  "alvi",
  "Rasul",
  "ahmad",
  "Ibra",
  "Milana",
  "Magomed",
  "adam",
  "Saad",
  "abdurahman",
  "Mansur",
];
const newArr = [];
for (const char of arr) {
  if (char.includes("a")) {
    newArr.push(char);
  }
}
