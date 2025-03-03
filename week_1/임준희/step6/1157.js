const s = require("fs").readFileSync(0).toString().trim().toUpperCase();

const obj = {};

for (const alpha of s) {
  if (obj[alpha]) {
    obj[alpha] += 1;
  } else {
    obj[alpha] = 1;
  }
}

const maxNum = Math.max(...Object.values(obj));

const res = Object.entries(obj).filter(([_, v]) => v === maxNum);

console.log(res.length > 1 ? "?" : res[0][0]);
