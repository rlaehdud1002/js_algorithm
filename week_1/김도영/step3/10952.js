// A + B - 5

const fs = require("fs");

const arr = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < arr.length; i++) {
  const [a, b] = arr[i].split(" ").map(Number);

  if (a === 0 && b === 0) {
    break;
  }

  console.log(a + b);
}
