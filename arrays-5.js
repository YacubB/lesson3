const arr = [
  "Rasul",
  "Alvi",
  "Ibra",
  "Milana",
  "Magomed",
  "Saad",
  "Adam",
  "Abdurahman",
  "Mansur",
  "Yacub",
];
for (const i of arr) {
  if (i.startsWith("A")) {
    console.log(i);
  }
}
// Еще так можно
for (const i of arr) {
  if (i[0] === "A") {
    console.log(i);
  }
}
