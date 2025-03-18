let fs = require("fs");

let [time, cook] = fs.readFileSync("input.txt").toString().trim().split("\n");

let [h, m] = time.split(" ").map(Number);
let c = Number(cook);

m += c;

if (m >= 60) {
  h += Math.floor(m / 60);
  m %= 60;
}

if (h === 24) {
  h = 0;
}

console.log(h, m);
