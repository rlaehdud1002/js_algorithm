const [n, input] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((x, i) => (i === 0 ? parseInt(x) : x.split(" ").map(Number)));

const waiting = [];
let cur = 1;

while (input.length > 0 || waiting.length > 0) {
  if (input.length > 0 && input[0] === cur) {
    input.shift();
    cur++;
  } else if (waiting.length > 0 && waiting[waiting.length - 1] === cur) {
    waiting.pop();
    cur++;
  } else if (input.length > 0) {
    waiting.push(input.shift());
  } else {
    console.log("Sad");
    process.exit(0);
  }
}

console.log("Nice");
