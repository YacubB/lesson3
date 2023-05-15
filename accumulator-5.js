const arr = [1, 3, 2, 4, 5, 6, 7, 8, 9, 10];
const accumulatorEven = [];
for (const char of arr) {
  if (char % 2 === 0) {
    accumulatorEven.push(char);
  }
}
