// Create an algorithm to count the words in a list.
let str = "The quick brown fox jumps over the lazy dog";

function countWords(str) {
  let count = 0;
  let inWord = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      inWord = false;
    } else if (!inWord) {
      inWord = true;
      count++;
    }
  }
  return count;
}

console.log("Word Count: " + countWords(str));

// Time Complexity: O(n)
// Space Complexity: O(1)
