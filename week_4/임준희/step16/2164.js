const n = parseInt(require("fs").readFileSync(0).toString().trim());

const arr = new Array(2 * n);

for (let i = 0; i < n; i++) {
  arr[i] = i + 1;
}

let head = 0;
let tail = n;
let cnt = n;

while (cnt > 1) {
  head = (head + 1) % (2 * n);
  cnt--;

  arr[tail] = arr[head];
  head = (head + 1) % (2 * n);
  tail = (tail + 1) % (2 * n);
}

console.log(arr[head]);
