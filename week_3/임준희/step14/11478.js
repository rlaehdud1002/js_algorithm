const s = require("fs").readFileSync(0).toString().trim();
const arr = [];

for (let i = 0; i < s.length; i++) {
  for (let j = 1; j <= s.length - i; j++) {
    arr.push(s.slice(i, i + j));
  }
}

const res = new Set(arr);
console.log(res.size);
