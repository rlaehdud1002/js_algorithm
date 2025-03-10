const [x, y, w, h] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(Math.min(w - x, h - y, x, y));
