// A, B, C 찾기

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const values = input[0]
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const length = values.length;

for (let i = 0; i < length; i++) {
  for (let j = i + 1; j < length; j++) {
    for (let k = j + 1; k < length; k++) {
      const A = values[i];
      const B = values[j];
      const C = values[k];

      const arr = [A, B, C, A + B, B + C, C + A, A + B + C].sort(
        (a, b) => a - b
      );

      let check = true;
      for (l = 0; l < 7; l++) {
        if (values[l] !== arr[l]) check = false;
      }

      if (check) {
        console.log(A, B, C);
        process.exit();
      }
    }
  }
}
