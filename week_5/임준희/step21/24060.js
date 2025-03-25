const input = require("fs").readFileSync(0).toString().trim().split("\n");
const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let cnt = 0;
let res = -1;

const tmp = new Array(n);

function mergeSort(p, r) {
  if (p < r) {
    const q = Math.floor((p + r) / 2);
    mergeSort(p, q);
    mergeSort(q + 1, r);
    merge(p, q, r);
  }
}

function merge(p, q, r) {
  let i = p;
  let j = q + 1;
  let t = 0;

  while (i <= q && j <= r) {
    if (arr[i] <= arr[j]) {
      tmp[t++] = arr[i++];
    } else {
      tmp[t++] = arr[j++];
    }
  }

  while (i <= q) {
    tmp[t++] = arr[i++];
  }

  while (j <= r) {
    tmp[t++] = arr[j++];
  }

  i = p;
  t = 0;
  while (i <= r) {
    cnt++;
    const val = tmp[t++];
    arr[i++] = val;

    if (cnt === k) {
      res = val;
    }
  }
}

mergeSort(0, n - 1);

console.log(res);
