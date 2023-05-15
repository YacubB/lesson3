const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const accumulatorOdd = [];
for (const char of arr) {
  if (char % 2 !== 0) {
    accumulatorOdd.push(char);
  }
}
