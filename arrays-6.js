const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const char of arr) {
  if (char % 2 === 0) {
    console.log(char);
  }
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}

let i = 0;
while (arr.length > i) {
  if (arr[i] % 2 !== 0) {
    console.log(arr[i]);
  }
  i++;
}
