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
      callback(start.data);
      this.inOrder(start.right, callback);
    }
  }

  // Inserting nodes into the binary search tree
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

  isIdenticalTree(node1, node2) {
    if (node1 === null && node2 === null) {
      return true;
    }

    if (node1 === null || node2 === null) {
      return false;
    }

    if (node1.data !== node2.data) {
      return false;
    }

    return (
      this.isIdenticalTree(node1.left, node2.left) &&
      this.isIdenticalTree(node1.right, node2.right)
    );
  }

  isSubtree(tree1, tree2) {
    if (tree1 === null) {
      return false;
    }

    if (this.isIdenticalTree(tree1, tree2)) {
      return true;
    }

    return (
      this.isSubtree(tree1.left, tree2) || this.isSubtree(tree1.right, tree2)
    );
  }
}

const tree = new BinaryTree();
tree.insertBinarySearchTree(5);
tree.insertBinarySearchTree(4);
tree.insertBinarySearchTree(3);
tree.insertBinarySearchTree(2);
tree.insertBinarySearchTree(9);
tree.insertBinarySearchTree(7);

const subtree = new BinaryTree();
subtree.insertBinarySearchTree(4);
subtree.insertBinarySearchTree(3);
subtree.insertBinarySearchTree(2);

console.log("MAIN TREE: ");
tree.inOrder(tree.root, (data) => console.log(data));
console.table(tree.root);

console.log("SUBTREE: ");
subtree.inOrder(subtree.root, (data) => console.log(data));
console.log(subtree.root);

console.log("Is subtree?", tree.isSubtree(tree.root, subtree.root));



// another simple way

// class Node
// {
//     constructor(data)
//     {
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }

// class checkSubTree
// {
//     areIdentical(root1, root2)
//     {
//         if (root1 === null && root2 === null)
//         {
//             return true;
//         }

//         if (root1 === null || root2 === null)
//         {
//             return false;
//         }

//         return (
//             root1.data === root2.data &&
//             areIdentical(root1.left, root2.left) &&
//             areIdentical(root1.right, root2.right)
//         );
//     }

//     isSubtree(root1, root2)
//     {
//         if (root2 === null)
//         {
//             return true;
//         }

//         if (root1 === null)
//         {
//             return false;
//         }

//         if (areIdentical(root1, root2))
//         {
//             return true;
//         }

//         return this.isSubtree(root1.left, root2) || this.isSubtree(root1.right, root2);
//     }
// }



// Example usage:
// Create the first binary tree
//     1
//    / \
//   2   3
//  / \
// 4   5

// let root1 = new Node(1);
// root1.left = new Node(2);
// root1.right = new Node(3);
// root1.left.left = new Node(4);
// root1.left.right = new Node(5);

// Create the second binary tree
//   2
//  / \
// 4   5

// let root2 = new Node(2);
// root2.left = new Node(4);
// root2.right = new Node(5);

// Check if the second tree is a subtree of the first tree
// console.log(isSubtree(root1, root2)); // Output: true

// Create a third binary tree
//     1
//    / \
//   2   3
//  / \
// 4   6

// let root3 = new Node(1);
// root3.left = new Node(2);
// root3.right = new Node(3);
// root3.left.left = new Node(4);
// root3.left.right = new Node(6);

// Check if the third tree is a subtree of the first tree
// console.log(isSubtree(root1, root3)); // Output: false
