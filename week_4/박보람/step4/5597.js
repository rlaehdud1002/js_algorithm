let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let set = new Set(input);

// 값이 작을때는 set 타입이 더 빠르다.
for (let i = 1; i <= 30; i++) {
  if (!set.has(i)) {
    console.log(i);
  }
}
