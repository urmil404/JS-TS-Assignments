class CacheLFU {
  constructor(capacity, expiry) {
    this.capacity = capacity;
    this.expiry = expiry;
    this.cache = new Map();
    this.freq = new Map();
  }

  // Getting info based on the key and updating the frequency
  get(key) {
    if (this.cache.has(key)) {
      const value = this.cache.get(key);
      this.updateFrequency(key); // update the frequency
      return value;
    } else {
      return null;
    }
  }

  // Adding new task to the cache
  put(key, value) {
    if (this.capacity <= 0) {
      return;
    }

    // Checking the capacity of cache if full then remove the LFU from cache
    if (this.cache.size >= this.capacity) {
      this.removeLFU();
    }

    // Adding new key value to the cache
    this.cache.set(key, value);
    this.freq.set(key, 1);
    console.log("****************Cache*****************");
    console.table(this.cache);
    console.log("************************************");

    // After certain time it will automatically deleted from the cache
    setTimeout(() => {
      this.removeKey(key);
      console.table(this.cache);
    }, this.expiry);
  }

  //Updating the frequency
  updateFrequency(key) {
    const newFreq = this.freq.get(key) + 1;
    this.freq.set(key, newFreq);
    console.log("****************Frequency*****************");
    console.table(this.freq);
    console.log("******************************************");
  }

  // Remove LFU info based on frequency
  removeLFU() {
    let minFreq = Infinity;
    let LFUKey = null;

    // Looping through all the frequency
    for (let [key, value] of this.freq) {
      // Checking for minimum frequency
      if (this.freq < minFreq) {
        minFreq = value;
        LFUKey = key;
      }
    }

    // Deleting from the cache and frequency map
    this.cache.delete(LFUKey);
    this.freq.delete(LFUKey);
  }

  // Removing info based on key
  removeKey(key) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
      this.freq.delete(key);
    }
  }

  // clear the cache and freq map
  clear() {
    this.cache.clear();
    this.freq.clear();
  }
}

const cacheObj = new CacheLFU(5, 6000); // Capacity: 5 and expiry: 6000ms
cacheObj.put("key1", "Value1");
cacheObj.put("key2", "Value2");
cacheObj.put("key3", "Value3");
cacheObj.put("key4", "Value4");
cacheObj.put("key5", "Value5");
cacheObj.put("key6", "Value6");


cacheObj.get("key2"); // Value 2, frequency 2
cacheObj.get("key1"); // value 1, frequency 2
cacheObj.get("key1");
cacheObj.get("key1");