const [h, m] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (m < 45) {
  console.log(h === 0 ? 23 : h - 1, m + 15);
} else {
  console.log(h, m - 45);
}
