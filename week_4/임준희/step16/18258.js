const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = parseInt(input[0]);
const queue = [];
let first = 0;
let last = 0;
let res = "";

for (let i = 1; i <= n; i++) {
  const [command, x] = input[i].split(" ");

  switch (command) {
    case "push":
      queue[last++] = parseInt(x);
      break;
    case "pop":
      res += (first < last ? queue[first++] : -1) + "\n";
      break;
    case "size":
      res += last - first + "\n";
      break;
    case "empty":
      res += (first === last ? 1 : 0) + "\n";
      break;
    case "front":
      res += (first < last ? queue[first] : -1) + "\n";
      break;
    case "back":
      res += (first < last ? queue[last - 1] : -1) + "\n";
  }
}

console.log(res);
