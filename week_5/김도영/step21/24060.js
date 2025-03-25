// 알고리즘 수업 - 병합 정렬 1

const fs = require("fs");

const [[N, K], input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

let count = 0;
let result = "-1";

function mergeSort(A, p, r) {
  if (p < r) {
    const q = Math.floor((p + r) / 2);

    mergeSort(A, p, q);
    mergeSort(A, q + 1, r);
    merge(A, p, q, r);
  }
}

function merge(A, p, q, r) {
  let i = p;
  let j = q + 1;
  let t = 1;
  const tmp = new Array();

  while (i <= q && j <= r) {
    if (A[i] <= A[j]) {
      tmp[t++] = A[i++];
    } else {
      tmp[t++] = A[j++];
    }
  }

  while (i <= q) {
    tmp[t++] = A[i++];
  }

  while (j <= r) {
    tmp[t++] = A[j++];
  }

  i = p;
  t = 1;
  while (i <= r) {
    A[i++] = tmp[t++];
    count++;

    if (count === K) {
      result = A[i - 1];
    }
  }
}

mergeSort(input, 0, N - 1);
console.log(result);
