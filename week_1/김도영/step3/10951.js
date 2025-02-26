// A + B - 4

const fs = require("fs");

const arr = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < arr.length; i++) {
  const [a, b] = arr[i].split(" ").map(Number);

  console.log(a + b);
}
