let [t, ...arr] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

t = Number(t);
arr = arr.map((el) => el.replace("\r", "").split(" "));

for (let i = 0; i < t; i++) {
  let result = "";
  for (let j = 0; j < arr[i][1].length; j++) {
    result += arr[i][1][j].repeat(Number(arr[i][0]));
  }
  console.log(result);
}
