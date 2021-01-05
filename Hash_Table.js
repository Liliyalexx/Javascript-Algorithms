//  Key-Value pairs
// The like arrays but keys are not ordered
// Unlike arrays, hash tables are fast for all of the following operations:
// finding values, adding new values, and removing values
// Python has Dictionaries
// JS has Objects and Maps
// Ruby has Hashes

// "a".charCodeAt(0)
// 97
// "hi".charCodeAt(0)
// 104
// "hi".charCodeAt(1)
// 105
// "a".charCodeAt(0)- 96
// 1
// "d".charCodeAt(0) - 96
// 4
// "z".charCodeAt(0) - 96
// 26

// Basic Hush function
function hash(key, arrayLen){
  let total = o;
  for (let char of key){
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}
// hash ("pink", 9)

//  Hash function
function (key, arrayLen){
  let total = 0;
  let WIERD_PRIME = 31;
  for (let i = 0; i< Math.min(key.length, 100); i++){
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total * WIERD_PRIME + value)%arrayLen;
  }
  return toral;
}

// Hashing Revisited
function hash (key, arrayLen){
  let total = 0;
  for (let i=0; i< key.length; i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}
// 
function hash (key, arrayLen){
  let totla = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total * WIERD_PRIME + value) % arrayLen;
  }
  return total;
  }
  // HashTable Class

  class HashTable {
    constructor(size=53){
      this.keyMap = new Array(size);
    }
    _hash(key) {
      let total = 0;
      let WEIRD_PRIME = 31;
      for (let i=0; i < Math.min(key.length, 100);  i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
      }
      return total;
    }
    set(key, value){
      let index = this._hash(key);
      if (!this.keyMap[index]){
        this.keyMap[index] = [];
      }
      this.keyMap[index].push([key, value]);
    }
    get (key) {

    }
  }
  let ht = new HashTable();
  ht.set("hello world", "goodbye!!")