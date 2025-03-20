// 카드 2

const fs = require("fs");

const N = Number(fs.readFileSync(0).toString().trim());

let card = new Array(N);

for (let i = 0; i < N; i++) {
  card[i] = i + 1;
}

let front = 0;
let rear = N - 1;

while (front !== rear) {
  // 가장 앞 제거
  front++;

  // card가 1개 남았으면 break
  if (front === rear) {
    break;
  }

  // 앞에 있는 숫자를 가장 뒤로 보냄
  const num = card[front];

  front++;
  rear++;
  card[rear] = num;
}

console.log(card[front]);
