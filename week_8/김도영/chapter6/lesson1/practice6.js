// 씨 오 더블유 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const string = input[1];

let result = 0;
for (i = 0; i < n - 2; i++) {
  for (j = i + 1; j < n - 1; j++) {
    for (k = j + 1; k < n; k++) {
      if (string[i] === "C" && string[j] === "O" && string[k] === "W") result++;
    }
  }
}

console.log(result);
