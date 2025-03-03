const s = require("fs").readFileSync(0).toString().trim();

let satisfied = true;

for (let i = 0; i < s.length; i++) {
  if (s[i] !== s[s.length - 1 - [i]]) {
    satisfied = false;
  }
}

console.log(satisfied ? 1 : 0);
