// problem: undirected graph demonstration


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// linkedlist to create nodes

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
  }

  remove(data) {
    if (!this.head) {
      return null;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      return this.head;
    }
    let curr = this.head;
    while (curr.next) {
      if (curr.next.data === data) {
        curr.next = curr.next.next;
        return this.head;
      }
      curr = curr.next;
    }
    return this.head;
  }

  // convert nodes data into a array for traversal purpose
  toArray() {
    const result = [];
    let curr = this.head;
    while (curr) {
      result.push(curr.data);
      curr = curr.next;
    }
    return result;
  }
}

// graph implementation using linkedlist

class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    this.adjList.set(vertex, new LinkedList());
  }

  addEdge(v1, v2) {
    this.adjList.get(v1).insertAtEnd(v2);
    this.adjList.get(v2).insertAtEnd(v1);
  }

  removeVertex(vertex) {
    const neighbors = this.adjList.get(vertex);
    for (let neighbor of neighbors.toArray()) {
      this.adjList.get(neighbor).remove(vertex);
    }
    this.adjList.delete(vertex);
  }

  removeEdge(v1, v2) {
    this.adjList.get(v1).remove(v2);
    this.adjList.get(v2).remove(v1);
  }

  // DFS traversal
    depthFirstTraversal(start, visited = new Set())
    {
        visited.add(start);
        console.log(start);
    for (let neighbor of this.adjList.get(start).toArray()) {
        if (!visited.has(neighbor)) {
        this.depthFirstTraversal(neighbor, visited);
      }
    }
  }

  // BFS traversal

  breadthFirstTraversal(start) {
    const visited = new Set();
    const queue = [start];
    visited.add(start);
    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current);
      for (let neighbor of this.adjList.get(current).toArray()) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }

  // print vertices using array of nodes
  printGraph() {
    for (let [vertex, neighbors] of this.adjList) {
      console.log(`${vertex} -> ${neighbors.toArray().join(", ")}`);
    }
  }
}

//creating a new graph

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "A");
graph.addEdge("A", "C");

// print graph

graph.printGraph();

// DFS traversal
console.log("-----DFS---------")
graph.depthFirstTraversal("A");
console.log("-----BFS---------")
graph.breadthFirstTraversal("A");

// BFS traversal
console.log("-----------")
graph.removeVertex("C");
graph.printGraph();

console.log("-----------")
// remove edge from A vertex to B vertex
graph.removeEdge("A", "B");
graph.printGraph();
