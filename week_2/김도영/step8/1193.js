// 분수 찾기

const fs = require("fs");

const N = Number(fs.readFileSync(0).toString().trim());

let start = 1;
let i = 1;

while (true) {
  if (N >= start && N < start + i) {
    let arr = new Array();

    for (let a = 1; a <= i; a++) {
      for (let b = i; b >= 1; b--) {
        if (a + b === i + 1) {
          arr.push(`${a}/${b}`);
        }
      }
    }

    const idx = N - start;
    const result = i % 2 === 1 ? arr.reverse()[idx] : arr[idx];

    console.log(result);
    break;
  } else {
    start += i;
    i += 1;
  }
}
