class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree
{
    constructor()
    {
        this.root = null;
    }

    // Creating a new Node
    createNode(data)
    {
        let newNode = new Node(data);
        newNode.left = null;
        newNode.right = null;
        return newNode;
    }

    //Insertion Binary Search tree
    insertBST(data)
    {
        let newNode = this.createNode(data);
        if (this.root === null)
        {
            this.root = newNode;
            return;
        } else
        {
            let current = this.root;
            while (true)
            {
                if (data < current.data)
                {
                    if (current.left === null)
                    {
                        current.left = newNode;
                        break;
                    } else
                    {
                        current = current.left;
                    }
                } else
                {
                    if (current.right === null)
                    {
                        current.right = newNode;
                        break;
                    } else
                    {
                        current = current.right;
                    }
                }
            }
        }
    }

    printNthNode(root, n)
    {
        if (!root)
        {
            return;
        }
        if (n === 0)
        {
            console.log(root.data);
            return;
        }
        this.printNthNode(root.left, n - 1);
        this.printNthNode(root.right, n - 1);
    }

}

const tree = new BinaryTree();
tree.insertBST(300);
tree.insertBST(200);
tree.insertBST(100);
tree.insertBST(250);
tree.insertBST(400);
tree.insertBST(350);
tree.insertBST(450);

const level = tree.printNthNode(tree.root, 2);

//       300
//    /     \
//   200     400
//  /  \     /  \
// 100 250  350  450




/* another simple approach */

// function printNodesAtNthDistance(root, n)
// {
//     if (root === null)
//     {
//         return;
//     }

//     let queue = [];
//     queue.push(root);

//     let level = 0;

//     while (queue.length > 0)
//     {
//         let count = queue.length;

//         for (let i = 0; i < count; i++)
//         {
//             let node = queue.shift();

//             if (level === n)
//             {
//                 console.log(node.data);
//             }

//             if (node.left !== null)
//             {
//                 queue.push(node.left);
//             }

//             if (node.right !== null)
//             {
//                 queue.push(node.right);
//             }
//         }

//         level++;

//         if (level > n)
//         {
//             break;
//         }
//     }
// }

// Create a binary tree
//     100
//    /   \
//   200   300
//  /  \      \
// 400 500     600

// let root = new Node(100);
// root.left = new Node(200);
// root.right = new Node(300);
// root.left.left = new Node(400);
// root.left.right = new Node(500);
// root.right.right = new Node(600);

// // Print nodes at distance 2 from the root or level 2
// printNodesAtNthDistance(root, 2);
