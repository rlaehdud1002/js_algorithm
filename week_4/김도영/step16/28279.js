// 덱 2

const fs = require("fs");

const [N, ...questionArr] = fs.readFileSync(0).toString().trim().split("\n");

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  pushFront(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  pushBack(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  popFront() {
    if (this.size === 0) return -1;

    const value = this.head.value;
    this.head = this.head.next;

    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }

    this.size--;
    return value;
  }

  popBack() {
    if (this.size === 0) return -1;

    const value = this.tail.value;
    this.tail = this.tail.prev;

    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }

    this.size--;
    return value;
  }

  front() {
    return this.size === 0 ? -1 : this.head.value;
  }

  back() {
    return this.size === 0 ? -1 : this.tail.value;
  }

  isEmpty() {
    return this.size === 0 ? 1 : 0;
  }

  getSize() {
    return this.size;
  }
}

const deq = new Deque();
let answer = [];

for (let question of questionArr) {
  const [cmd, value] = question.split(" ").map(Number);

  switch (cmd) {
    case 1:
      deq.pushFront(value);
      break;
    case 2:
      deq.pushBack(value);
      break;
    case 3:
      answer.push(deq.popFront());
      break;
    case 4:
      answer.push(deq.popBack());
      break;
    case 5:
      answer.push(deq.getSize());
      break;
    case 6:
      answer.push(deq.isEmpty());
      break;
    case 7:
      answer.push(deq.front());
      break;
    case 8:
      answer.push(deq.back());
      break;
  }
}

console.log(answer.join("\n"));
