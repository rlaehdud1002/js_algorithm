let input = require("fs").readFileSync(0).toString().trim().split("\n");
input = input.map((row) => row.split(" ").map((i) => Number(i)));

let zero = getZero();
let n = zero.length;
let res = "";
recur(0);

function recur(num) {
  if (num === n) {
    for (let x of input) {
      res += `${x.join(" ")}\n`;
    }
    console.log(res);
    process.exit(0);
  } else {
    let [row, col] = zero[num];

    for (let i = 1; i <= input.length; i++) {
      if (check(row, col, i)) {
        input[row][col] = i;
        recur(num + 1);
        input[row][col] = 0;
      }
    }
  }
}

function check(row, col, value) {
  let threeRow = Math.floor(row / 3) * 3;
  let threeCol = Math.floor(col / 3) * 3;

  for (let i = 0; i < input.length; i++) {
    if (input[row][i] === value || input[i][col] === value) return false;
  }

  for (let i = threeRow; i < threeRow + 3; i++) {
    for (let j = threeCol; j < threeCol + 3; j++) {
      if (input[i][j] === value) return false;
    }
  }

  return true;
}

function getZero() {
  const arr = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[i][j] === 0) arr.push([i, j]);
    }
  }
  return arr;
}
