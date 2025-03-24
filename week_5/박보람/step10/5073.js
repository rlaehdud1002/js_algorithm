let arr = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

for (li of arr) {
  let [a, b, c] = li.sort((x, y) => x - y);

  if (a === 0 && b === 0 && c === 0) {
    break;
  }

  if (a + b <= c) {
    console.log("Invalid");
    continue;
  }

  if (a === b && b === c) {
    console.log("Equilateral");
  } else if (a === b || b === c || a === c) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
}
