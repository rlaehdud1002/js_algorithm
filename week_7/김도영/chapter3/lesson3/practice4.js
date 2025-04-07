// 정렬된 수 위치 알아내기

const fs = require("fs");

const [[n], arr] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

class SortNumber {
  constructor(idx, num) {
    this.idx = idx;
    this.num = num;
  }
}

let numArr = new Array();
for (let i = 0; i < n; i++) {
  numArr.push(new SortNumber(i, arr[i]));
}

numArr.sort((a, b) => {
  if (a.num === b.num) {
    return a.idx - b.idx;
  }

  return a.num - b.num;
});

const result = new Array(n);
for (let i = 0; i < n; i++) {
  result[numArr[i].idx] = i + 1;
}

console.log(result.join(" "));
