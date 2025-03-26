let [input, ...string] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.replace(/\r/g, ""));

let [N, M] = input.split(" ").map(Number);
//숫자가 들어오면 해당하는 포켓몬 이름, 문자가 들어오면 이름에 해당하는 번호 출력

let pocketmon = new Map();
for (let i = 0; i < N; i++) {
  pocketmon.set(string[i], i + 1);
  pocketmon.set((i + 1).toString(), string[i]);
}

let quiz = string.slice(N);
for (let i = 0; i < M; i++) {
  console.log(pocketmon.get(quiz[i]));
}
