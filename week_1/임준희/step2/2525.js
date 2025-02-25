const input = require("fs").readFileSync(0).toString().trim().split("\n");

let [h, m] = input[0].split(" ").map(Number);
const t = Number(input[1]);

h += Math.floor(t / 60);
m += t % 60;

if (m >= 60) {
  h += 1;
  m -= 60;
}

if (h >= 24) {
  h -= 24;
}
console.log(h, m);
