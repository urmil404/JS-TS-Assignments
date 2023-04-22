class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.inorder = [];
  }

  createANode(data) {
    let newNode = new Node(data);
    newNode.left = null;
    newNode.right = null;
    return newNode;
  }

  preOrder(start, callback) {
    if (start !== null) {
      callback(start.data);
      this.preOrder(start.left, callback);
      this.preOrder(start.right, callback);
    }
  }

  inOrder(start, callback) {
    if (start !== null) {
      this.inOrder(start.left, callback);
      this.inorder.push(start.data);
      callback(start.data);
      this.inOrder(start.right, callback);
    }
  }

  postOrder(start, callback) {
    if (start !== null) {
      this.postOrder(start.left, callback);
      this.postOrder(start.right, callback);
      callback(start.data);
    }
  }

  insertBinarySearchTree(data) {
    let newNode = this.createANode(data);
    if (this.root === null) {
      this.root = newNode;
      return;
    } else {
      let current = this.root;
      while (true) {
        if (data < current.data) {
          if (current.left === null) {
            current.left = newNode;
            break;
          } else {
            current = current.left;
          }
        } else {
          if (current.right === null) {
            current.right = newNode;
            break;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  // Calling the mirror conversion function and returning new object without affecting original one
  mirror() {
    const newTree = new BinaryTree();
    newTree.root = this.mirrorBinaryTree(this.root);
    return newTree;
  }

  // function for the conversion to mirror tree
  mirrorBinaryTree(root) {
    if (root === null) {
      return null;
    }
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    this.mirrorBinaryTree(root.left);
    this.mirrorBinaryTree(root.right);
    return root;
  }

  // Checking for mirror tree based on the inorder traversal
  areMirrors(inorder1, inorder2) {
    if (inorder1.length !== inorder2.length) {
      return false;
    }

    for (let i = 0; i < inorder1.length; i++) {
      if (inorder1[i] !== inorder2[inorder2.length - i - 1]) {
        return false;
      }
    }

    return true;
  }
}

const tree = new BinaryTree();
tree.insertBinarySearchTree(5);
tree.insertBinarySearchTree(4);
tree.insertBinarySearchTree(3);
tree.insertBinarySearchTree(2);
tree.insertBinarySearchTree(9);
tree.insertBinarySearchTree(7);

console.log("ORIGINAL BINARY TREE: ");
tree.inOrder(tree.root, (data) => console.log(data));

const mirrorTree = tree.mirror();
console.log("After Mirror Conversion");
mirrorTree.inOrder(mirrorTree.root, (data) => console.log(data));

console.log(
  "Is mirror tree?",
  tree.areMirrors(tree.inorder, mirrorTree.inorder)
);
