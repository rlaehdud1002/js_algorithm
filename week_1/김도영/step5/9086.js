// 문자열

const fs = require("fs");

const [N, ...arr] = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < N; i++) {
  const wordLength = arr[i].length;
  let first = "";
  let end = "";

  if (wordLength === 1) {
    first = arr[i];
    end = arr[i];
  } else {
    first = arr[i][0];
    end = arr[i][wordLength - 1];
  }

  console.log(`${first}${end}`);
}
