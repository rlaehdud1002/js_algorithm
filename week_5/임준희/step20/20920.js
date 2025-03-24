const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const arr = input.slice(1).filter((x) => x.length >= m);

const frequency = new Map();

for (let i = 0; i < arr.length; i++) {
  frequency.set(arr[i], (frequency.get(arr[i]) || 0) + 1);
}

const uniqueWords = Array.from(new Set(arr));

uniqueWords.sort((a, b) => {
  const freqDiff = frequency.get(b) - frequency.get(a);
  if (freqDiff !== 0) return freqDiff;

  const lengthDiff = b.length - a.length;
  if (lengthDiff !== 0) return lengthDiff;

  return a.localeCompare(b);
});

console.log(uniqueWords.join("\n"));
