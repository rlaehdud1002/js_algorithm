let [n, ...arr] = require("fs").readFileSync(0).toString().trim().split("\n");

n = parseInt(n);
arr = [...new Set(arr)];

arr.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return a.charCodeAt(i) - b.charCodeAt(i);
    }
  }
});

console.log(arr.join("\n"));
