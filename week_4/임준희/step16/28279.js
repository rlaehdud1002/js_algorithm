const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = parseInt(input[0]);

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

  addFront(value) {
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

  addRear(value) {
    const newNode = new Node(value);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.size++;
  }

  removeFront() {
    if (this.size === 0) return -1;

    const value = this.head.value;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.size--;
    return value;
  }

  removeRear() {
    if (this.size === 0) return -1;

    const value = this.tail.value;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.size--;
    return value;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0 ? 1 : 0;
  }

  getFront() {
    return this.size === 0 ? -1 : this.head.value;
  }

  getRear() {
    return this.size === 0 ? -1 : this.tail.value;
  }
}

const deque = new Deque();
const res = [];

for (let i = 1; i <= n; i++) {
  const [command, x] = input[i].split(" ").map(Number);

  switch (command) {
    case 1:
      deque.addFront(x);
      break;
    case 2:
      deque.addRear(x);
      break;
    case 3:
      res.push(deque.removeFront());
      break;
    case 4:
      res.push(deque.removeRear());
      break;
    case 5:
      res.push(deque.getSize());
      break;
    case 6:
      res.push(deque.isEmpty());
      break;
    case 7:
      res.push(deque.getFront());
      break;
    case 8:
      res.push(deque.getRear());
      break;
  }
}

console.log(res.join("\n"));
