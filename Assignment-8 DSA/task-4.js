// Create a Queue using only Stack. Demonstrate Peek, Insertion and Deletion Operations.

class Queue {
  constructor() {
    this.enqueueStack = [];
    this.dequeueStack = [];
  }

  peek() {
    if (this.dequeueStack.length === 0) {
      while (this.enqueueStack.length > 0) {
        this.dequeueStack.push(this.enqueueStack.pop());
      }
    }
    if (this.dequeueStack.length > 0) {
      return this.dequeueStack[this.dequeueStack.length - 1];
    } else {
      return null;
    }
  }

  enqueue(value) {
    this.enqueueStack.push(value);
  }

  dequeue() {
    if (this.dequeueStack.length === 0) {
      while (this.enqueueStack.length > 0) {
        this.dequeueStack.push(this.enqueueStack.pop());
      }
    }
    if (this.dequeueStack.length > 0) {
      return this.dequeueStack.pop();
    } else {
      return null;
    }
  }
}

const queue = new Queue();

console.log(queue.peek()); // null

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek()); // 10
console.log(queue.dequeue()); // 10
console.log(queue.dequeue()); // 20

queue.enqueue(40);
console.log(queue.peek()); // 30

console.log(queue.dequeue()); // 30
console.log(queue.dequeue()); // 40

console.log(queue.peek()); // null
