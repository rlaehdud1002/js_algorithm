const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = parseInt(input[0]);

let res = "";

for (let i = 1; i <= n; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  const ab = a * b;
  while (b) {
    let temp = a;
    a = b;
    b = temp % b;
  }
  res += ab / a + "\n";
}

console.log(res);
