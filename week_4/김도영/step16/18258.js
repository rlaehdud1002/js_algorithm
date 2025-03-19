// 큐 2

const fs = require("fs");

const [N, ...inputArr] = fs.readFileSync(0).toString().trim().split("\n");

let queue = [];
let front = 0;
let rear = 0;
let answer = [];
for (let input of inputArr) {
  const [string, value] = input.split(" ");

  switch (string) {
    case "push":
      queue.push(parseInt(value));
      rear++;
      break;
    case "pop":
      if (front < rear) {
        answer.push(queue[front]);
        front++;
      } else {
        answer.push(-1);
      }
      break;
    case "size":
      answer.push(rear - front);
      break;
    case "empty":
      answer.push(rear === front ? 1 : 0);
      break;
    case "front":
      answer.push(front < rear ? queue[front] : -1);
      break;
    case "back":
      answer.push(front < rear ? queue[rear - 1] : -1);
  }
}

console.log(answer.join("\n"));
