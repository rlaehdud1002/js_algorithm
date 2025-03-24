let [...arr] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.replace("\r", "").split(" ").map(Number));

for (li of arr) {
  let [a, b] = li;
  if (a === 0 && b === 0) {
    break;
  } else if (b % a === 0) {
    console.log("factor");
  } else if (a % b === 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
}
