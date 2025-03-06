// 벌집

const fs = require("fs");

const N = Number(fs.readFileSync(0).toString().trim());

let start = 1;
let end = 1;
let i = 1;

while (true) {
  if (N >= start && N <= end) {
    console.log(i);
    break;
  }

  start = end + 1;
  end = end + 6 * i;
  i += 1;
}
