const arr = [1, -3, 4, 5, 6, -6, 0, -9, 20, 8];
let i = 0;
let sum = 0;
while (arr.length > i) {
  if (arr[i] > 0) {
    sum += arr[i];
  }
  i++;
}
