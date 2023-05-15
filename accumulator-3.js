const arr = [
  "JS",
  "Phyton",
  "Java",
  "C++",
  "Shift",
  "C#",
  "SQL",
  "HTML",
  "CSS",
  "TypeScript",
];
let newArr = [];
for (const char of arr) {
  if (char.length > 3) {
    newArr.push(char);
  }
}
