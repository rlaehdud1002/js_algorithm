// 나는야 포켓몬 마스터 이다솜

const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const pokemon = new Map();
const checkArr = input.slice(N + 1);

for (let i = 1; i < N + 1; i++) {
  pokemon.set(input[i], i);
  pokemon.set(i.toString(), input[i]);
}

let result = new Array();

for (let check of checkArr) {
  result.push(pokemon.get(check));
}

console.log(result.join("\n"));
