const n = parseInt(require("fs").readFileSync(0).toString().trim());

let arr = Array.from(Array(n), () => Array(n).fill(" "));

function star(n, row, col) {
  if (n === 1) {
    arr[row][col] = "*";
    return;
  }

  const size = n / 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === 1 && j === 1) {
        continue;
      } else {
        star(size, row + i * size, col + j * size);
      }
    }
  }
}

star(n, 0, 0);

let res = "";
for (let i = 0; i < n; i++) {
  res += arr[i].join("") + "\n";
}

console.log(res);
