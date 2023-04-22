// Create a Sortable Stack

class SortableStack {
  constructor() {
    this.stack = [];
    this.sortedStack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  // O(n^2)
  sort() {
    while (this.stack.length > 0) {
      let temp = this.stack.pop();
      while (
        this.sortedStack.length > 0 &&
        this.sortedStack[this.sortedStack.length - 1] > temp
      ) {
        this.stack.push(this.sortedStack.pop());
      }
      this.sortedStack.push(temp);
    }
    this.stack = this.sortedStack;
    this.sortedStack = [];
  }
}

let stack = new SortableStack();

stack.push(5);
stack.push(1);
stack.push(4);
stack.push(2);
stack.push(3);

console.log(stack.stack); // [5, 1, 3, 2, 4]
stack.sort();
console.log(stack.stack); // [1, 2, 3, 4, 5]

stack.pop(0);
console.log(stack.stack);

// O(n^2) time
