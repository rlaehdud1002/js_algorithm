let [t, ...test] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let coins = [25, 10, 5, 1];

for (let i = 0; i < t; i++) {
  let res = test[i];
  let result = [];

  for (let coin of coins) {
    result.push(Math.floor(res / coin));
    res %= coin;
  }

  console.log(result.join(" "));
}
