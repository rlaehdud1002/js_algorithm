const input = require("fs").readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  if (b % a === 0) {
    console.log("factor");
  } else if (a % b === 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
}
