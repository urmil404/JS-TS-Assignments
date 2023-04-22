// Create a Hash Table which uses Quadratic Probing for Hashing.

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  insert(key, value) {
    let index = this.hash(key);
    if (this.table[index]) {
      index = index * index;
      this.table[index] = value;
    } else {
      this.table[index] = value;
    }
  }

  get(key) {
    let index = this.hash(key);
    return this.table[index];
  }

  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(`INDEX: ${i} and VALUE: ${this.table[i]}`);
      }
    }
  }
}

let hashTable = new HashTable(10);

hashTable.insert("apple", 50);
hashTable.insert("apple", 60);

console.log(hashTable.get("apple"));
console.log(hashTable.get("banana"));

console.log(hashTable.display());

// hashTable.remove("banana");
// console.log(hashTable.get("banana"));
