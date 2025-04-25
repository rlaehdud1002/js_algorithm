// 등장하지 않는 문자열의 길이

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const string = input[1];

let result = 1;
for (let length = 1; length < n; length++) {
  let show = false;

  for (let j = 0; j < n - length + 1; j++) {
    for (let k = j + 1; k < n - length + 1; k++) {
      let same = true;

      for (let l = 0; l < length; l++) {
        if (string[j + l] !== string[k + l]) {
          same = false;
          break;
        }
      }
      if (same) show = true;
    }
  }

  if (show) {
    result = length + 1;
  } else {
    break;
  }
}

console.log(result);
