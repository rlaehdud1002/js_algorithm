const [[n, m], ...arr] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((x, i) => (i === 0 ? x.split(" ").map(Number) : x));

const white = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const black = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

const res = [];

for (let i = 0; i <= n - 8; i++) {
  for (let j = 0; j <= m - 8; j++) {
    let cnt1 = 0;
    let cnt2 = 0;
    for (let k = 0; k < 8; k++) {
      for (let l = 0; l < 8; l++) {
        if (arr[k + i][l + j] !== white[k][l]) {
          cnt2++;
        }
        if (arr[k + i][l + j] !== black[k][l]) {
          cnt1++;
        }
      }
    }
    res.push(cnt1);
    res.push(cnt2);
  }
}

console.log(Math.min(...res));
