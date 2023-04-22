//
// Create a Javascript Sort Comparator Function which would sort string by length
let numbers = [1, 2, 3, 7, 8, 9, 4, 5];
function sortByLength(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotIndex = Math.floor(arr.length / 2);
  const pivotValue = arr[pivotIndex];
  const left = [];
  const right = [];

  console.log(pivotIndex, pivotValue, left, right);
  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) {
      continue;
    }

    if (arr[i] < pivotValue) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...sortByLength(left), pivotValue, ...sortByLength(right)];
}

console.log(sortByLength(numbers));
