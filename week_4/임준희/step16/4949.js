const input = require("fs").readFileSync(0).toString().trim().split("\n");

let res = "";

for (let i = 0; i < input.length - 1; i++) {
  const arr = input[i].replace(/[^()\[\]]/g, "");
  let temp = [];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === ")" && temp[temp.length - 1] === "(") {
      temp.pop();
    } else if (arr[j] === "]" && temp[temp.length - 1] === "[") {
      temp.pop();
    } else {
      temp.push(arr[j]);
    }
  }
  res += (temp.length === 0 ? "yes" : "no") + "\n";
}

console.log(res);
