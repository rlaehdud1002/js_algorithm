let [...arr] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (a of arr) {
  if (a === -1) {
    break;
  }

  if (a <= 0) {
    continue;
  }

  let li = [];
  let i = 1;
  let sum = 0;

  while (a >= i) {
    if (a % i === 0 && a !== i) {
      li.push(i);
    }
    i++;
  }

  sum = li.reduce((acc, cur) => acc + cur, 0);

  if (sum === a) {
    console.log(`${sum} = ${li.join(" + ")}`);
  } else {
    console.log(`${a} is NOT perfect.`);
  }
}
