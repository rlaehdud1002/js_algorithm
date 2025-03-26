const n = parseInt(require("fs").readFileSync(0).toString().trim());

let cnt = 0;
let moves = [];

function hanoi(n, from, to, sub) {
  if (n === 1) {
    moves.push(`${from} ${to}`);
    cnt++;
    return;
  }
  hanoi(n - 1, from, sub, to);

  moves.push(`${from} ${to}`);
  cnt++;

  hanoi(n - 1, sub, to, from);
}

hanoi(n, 1, 3, 2);

console.log(cnt);
console.log(moves.join("\n"));
