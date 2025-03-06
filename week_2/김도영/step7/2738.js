// 행렬 덧셈

const fs = require("fs");

const [input, ...arr] = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input.split(" ").map(Number);

const matrix = Array.from(new Array(N), () => new Array(M).fill(0));
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    const arr_1 = arr[i].split(" ").map(Number);
    const arr_2 = arr[i + N].split(" ").map(Number);

    matrix[i][j] = arr_1[j] + arr_2[j];
  }
}

matrix.forEach((result) => console.log(result.join(" ")));
