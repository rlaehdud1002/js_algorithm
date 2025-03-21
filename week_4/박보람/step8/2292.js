const input = require("fs").readFileSync("input.txt").toString().trim();

let range = 1;
let block = 1;

while (block < input) {
  block += 6 * range;
  range++;
}

console.log(range);
