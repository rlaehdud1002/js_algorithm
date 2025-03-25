let n = require("fs").readFileSync("input.txt").toString().trim();

n = Number(n);

let cnt = -1;
let five = Math.floor(n / 5);

while (five >= 0) {
  let remain = n - five * 5;

  if (remain % 3 == 0) {
    cnt = remain / 3 + five;
    break;
  } else {
    five -= 1;
  }
}

console.log(cnt);
