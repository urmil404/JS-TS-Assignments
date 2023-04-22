function createMinHeap(array)
{
    // Build a binary min heap from the input array
    for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--)
    {
        heapify(array, i, array.length);
    }
    return array;
}

function heapSort(array)
{
    let sortedArray = [];

    // Create a min heap from the input array
    createMinHeap(array);

    // Extract the minimum element from the heap repeatedly to get a sorted array
    while (array.length > 0)
    {
        sortedArray.push(extractMin(array));
    }

    return sortedArray;
}

function heapify(array, index, heapSize)
{
    let leftChild = 2 * index + 1;
    let rightChild = 2 * index + 2;
    let smallest = index;

    if (leftChild < heapSize && array[ leftChild ] < array[ smallest ])
    {
        smallest = leftChild;
    }

    if (rightChild < heapSize && array[ rightChild ] < array[ smallest ])
    {
        smallest = rightChild;
    }

    if (smallest !== index)
    {
        swap(array, index, smallest);
        heapify(array, smallest, heapSize);
    }
}

function extractMin(array)
{
    let min = array[ 0 ];
    let lastElement = array.pop();

    if (array.length > 0)
    {
        array[ 0 ] = lastElement;
        heapify(array, 0, array.length);
    }

    return min;
}

function swap(array, i, j)
{
    let temp = array[ i ];
    array[ i ] = array[ j ];
    array[ j ] = temp;
}

// Example usage:
let array = [ 10, 13, 12, 5, 7, 21, 40, 12, 33 ];

// Create a min heap from the input array
let minHeap = createMinHeap(array);
console.log("Min heap:", minHeap); // Output: [5, 7, 12, 10, 12, 21, 40, 13, 33]

// Sort the array using heap sort
let sortedArray = heapSort(array);
console.log("Sorted array:", sortedArray); // Output: [5, 7, 10, 12, 12, 13, 21, 33, 40]
