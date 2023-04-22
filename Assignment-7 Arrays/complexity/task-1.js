// Find if two items of an array add up to a given number.

function getVal(p) {
  let arr = [1, 2, 6, 3, 7, 8, 9, 4, 5];
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] === p) {
        res.push([arr[i], arr[j]]);
      }
    }
  }
  return res;
}

console.log(getVal(9));

// Time Complexity(Best/worst): O(n)/O(n^2)
// Space Complexity: O(1)
