const [n, ...arr] = require("fs").readFileSync(0).toString().trim().split("\n");

let res = 0;

for (let i = 0; i < parseInt(n); i++) {
  let str = "";
  let satisfied = true;
  for (let j = 0; j < arr[i].length; j++) {
    if (str.includes(arr[i][j]) && arr[i][j] !== str[j - 1]) {
      satisfied = false;
      break;
    }
    str += arr[i][j];
  }
  if (satisfied) {
    res++;
  }
}

console.log(res);
