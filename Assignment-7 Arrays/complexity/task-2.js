//Find an item of an array which appears twice.
arr = [1, 2, 3, 4, 5, 6, 1, 2];
hash = {};
for (var i = 0; i < arr.length; i++) {
  if (hash[arr[i]]) {
    hash[arr[i]]++;
  } else {
    hash[arr[i]] = 1;
  }
}

const mySet = new Set();
console.log(hash);

for (var j = 0; j < arr.length; j++) {
  if (hash[arr[j] == 2]) {
    mySet.add(arr[j]);
  }
}

console.log(mySet);

// Time Complexity: O(n)
// Space Complexity: O(n)
