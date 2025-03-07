const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 0; i < input.length - 1; i++) {
  let arr = [1];
  for (let j = 2; j < input[i]; j++) {
    if (input[i] % j === 0) arr.push(j);
  }
  const sumN = arr.reduce((acc, cur) => acc + cur, 0);
  if (sumN === input[i]) {
    console.log(`${input[i]} = ${arr.join(" + ")}`);
  } else {
    console.log(`${input[i]} is NOT perfect.`);
  }
}
