const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = parseInt(input[0]);

function recursion(s, l, r) {
  cnt++;
  if (l >= r) return 1;
  if (s[l] !== s[r]) return 0;
  return recursion(s, l + 1, r - 1);
}

function isPalindrome(s) {
  return recursion(s, 0, s.length - 1);
}

let cnt = 0;
let res = "";

for (let i = 1; i <= n; i++) {
  cnt = 0;
  res += `${isPalindrome(input[i])} ${cnt}\n`;
}

console.log(res);
