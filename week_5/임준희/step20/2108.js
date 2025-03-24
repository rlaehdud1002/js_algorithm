const [n, ...arr] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const res = [];
const frequency = new Map();

arr.sort((a, b) => a - b);

const avg = Math.round(arr.reduce((acc, cur) => acc + cur, 0) / n);
res.push(avg === -0 ? 0 : avg);

res.push(arr[Math.floor(n / 2)]);

for (let i = 0; i < n; i++) {
  frequency.set(arr[i], (frequency.get(arr[i]) || 0) + 1);
}

let maxFrequency = 0;
for (const [_, val] of frequency) {
  maxFrequency = Math.max(maxFrequency, val);
}

const mostFrequent = [];
for (const [key, val] of frequency) {
  if (val === maxFrequency) {
    mostFrequent.push(key);
  }
}

if (mostFrequent.length === 1) {
  res.push(mostFrequent[0]);
} else {
  mostFrequent.sort((a, b) => a - b);
  res.push(mostFrequent[1]);
}

res.push(arr[n - 1] - arr[0]);

console.log(res.join("\n"));
