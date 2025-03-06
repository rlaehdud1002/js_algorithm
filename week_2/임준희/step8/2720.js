const [t, ...arr] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const res = Array.from({ length: t }, () => Array(4).fill(0));

for (let i = 0; i < t; i++) {
  res[i][0] = parseInt(arr[i] / 25);
  arr[i] = arr[i] % 25;

  res[i][1] = parseInt(arr[i] / 10);
  arr[i] = arr[i] % 10;

  res[i][2] = parseInt(arr[i] / 5);
  arr[i] = arr[i] % 5;

  res[i][3] = parseInt(arr[i] / 1);
  arr[i] = arr[i] % 1;
  console.log(res[i].join(" "));
}
