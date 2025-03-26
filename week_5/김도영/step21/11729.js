// 하노이 탑 이동 순서

const fs = require("fs");

const N = Number(fs.readFileSync(0).toString().trim());

let count = 0;
let answer = new Array();

function hanoi(num, from, other, to) {
  if (num === 0) {
    return;
  } else {
    hanoi(num - 1, from, to, other);
    answer.push([from, to]);
    count++;
    hanoi(num - 1, other, from, to);
  }
}

hanoi(N, 1, 2, 3);
console.log(count);
console.log(answer.map((element) => element.join(" ")).join("\n"));
