const n = parseInt(require("fs").readFileSync(0).toString().trim());

function recur(num) {
  if (num === n) {
    res++;
    return;
  }
  for (let i = 0; i < n; i++) {
    if (!visited1[i] && !visited2[num - i + n - 1] && !visited3[num + i]) {
      visited1[i] = 1;
      visited2[num - i + n - 1] = 1;
      visited3[num + i] = 1;
      recur(num + 1);
      visited1[i] = 0;
      visited2[num - i + n - 1] = 0;
      visited3[num + i] = 0;
    }
  }
}

let res = 0;
const visited1 = new Array(n).fill(0);
const visited2 = new Array(n * 2).fill(0);
const visited3 = new Array(n * 2).fill(0);

recur(0);
console.log(res);
