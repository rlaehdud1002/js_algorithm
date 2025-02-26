const input = require("fs").readFileSync(0).toString().trim().split("\n");

const totalPrice = parseInt(input[0]);
const n = parseInt(input[1]);
let result = 0;

for (let i = 2; i <= n + 1; i++) {
  const [price, count] = input[i].split(" ").map(Number);
  result += price * count;
}

console.log(result === totalPrice ? "Yes" : "No");
