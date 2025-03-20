const input = require("fs").readFileSync(0).toString().trim().split("\n");

const t = parseInt(input[0]);

let res = "";

for (let i = 1; i <= t; i++) {
  const arr = input[i];
  const temp = [];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === ")" && temp[temp.length - 1] === "(") {
      temp.pop();
    } else {
      temp.push(arr[j]);
    }
  }
  res += (temp.length === 0 ? "YES" : "NO") + "\n";
}

console.log(res);
