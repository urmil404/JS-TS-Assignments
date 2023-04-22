// Create a Doubly Linked List and write algorithm to delete duplicates in the list
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const new_node = new Node(data);
    if (!this.head) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      new_node.prev = this.tail;
      this.tail.next = new_node;
      this.tail = new_node;
    }
  }

  deleteDuplicates() {
    // using set
    const unique_values = new Set();
    let current_node = this.head;
    while (current_node) {
      if (unique_values.has(current_node.data)) {
        current_node.prev.next = current_node.next;
        if (current_node.next) {
          current_node.next.prev = current_node.prev;
        } else {
          this.tail = current_node.prev;
        }
      } else {
        unique_values.add(current_node.data);
      }
      current_node = current_node.next;
    }
  }
}

const myList = new DoublyLinkedList();

myList.append(1);
myList.append(2);
myList.append(3);
myList.append(2);
myList.append(4);
myList.append(1);
myList.append(5);

console.log("Before removing duplicates:");
let current_node = myList.head;
while (current_node) {
  console.log(current_node.data);
  current_node = current_node.next;
}

myList.deleteDuplicates();

console.log("After removing duplicates:");
current_node = myList.head;
while (current_node) {
  console.log(current_node.data);
  current_node = current_node.next;
}
