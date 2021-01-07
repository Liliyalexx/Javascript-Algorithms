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

// Basic Hash function
function hash(key, arrayLen){
  let total = 0;
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
    total = (total * WIERD_PRIME + value) % arrayLen;
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
    let index = this._hash(key);
    if ( this.keyMap[index]){
      for( let i =0; i < this.keyMap[index].length;i++){
        if ( this.keyMap[index][i][0] == key) {
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined;
    }
  
  // let ht = new HashTable(17);
  // ht.set("maroon", "#800000")
  // ht.set("yellow", "#FFFF00")
  // ht.set("olive", "#808000")
  // ht.set("salmon", "#FA8072")
  // ht.set("lightcoral", "#F08080")

//Keys & Values

values(){
  let valuesArr = [];
   for (let i = 0; i < this.keyMap.length; i++){
    if (this.keyMap[i]){
      for(let j = 0; j < this.keyMap.length; j++){
        if(!valuesArr.includes(this.keyMap[i][j][1])){
          valuesArr.push(this.keyMap[i][j][1])
        }
      }
    }
  }
   return valuesArr;
  }
  keys(){
    let keysArr = [];
     for (let i = 0; i < this.keyMap.length; i++){
      if (this.keyMap[i]){
        for(let j = 0; j < this.keyMap.length; j++){
          if(!keysArr.includes(this.keyMap[i][j][0])){
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
     return keysArr;
    }
  }

ht.keys().forEach(function(key){
  console.log(ht.get(key));
})

// Big O of Has tables(average case)
// Insert: O(1)
// Deletion: O(1)
// Access: O(1)

// Design a HashSet without using any built-in hash table libraries.

// To be specific, your design should include these functions:

// add(value): Insert a value into the HashSet. 
// contains(value) : Return whether the value exists in the HashSet or not.
// remove(value): Remove a value in the HashSet. If the value does not exist in the HashSet, do nothing.

// Example:

// MyHashSet hashSet = new MyHashSet();
// hashSet.add(1);         
// hashSet.add(2);         
// hashSet.contains(1);    // returns true
// hashSet.contains(3);    // returns false (not found)
// hashSet.add(2);          
// hashSet.contains(2);    // returns true
// hashSet.remove(2);          
// hashSet.contains(2);    // returns false (already removed)

// time O(n) space O(1) or O(n)
class MyHashSet {
  constructor() {
      this.items = []
      
  }
  
  add(value) {
      if(this.items.includes(value)) {
          return
      }
      this.items.push(value)
  }
  
  remove(value) {
      const index = this.items.indexOf(value)
      
      if(index < 0) {
          return
      }
      
      const firstHalf = this.items.slice(0, index)
      const secondHalf = this.items.slice(index+1)
      
      this.items = firstHalf.concat(secondHalf)
  }
  
  contains(value) {
      return this.items.includes(value)
  }
}

// Hashmap, get, put, remove

var MyHashMap = function () {
  this.keyArr = [];
};

//  value will always be non-negative.
 
put (key, value) {
  this.keyArr[key] = value;
};


//  * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 get (key) {
  if (!this.keyArr[key] && this.keyArr[key] !== 0) {
    return -1;
  }
  return this.keyArr[key];
};


//  * Removes the mapping of the specified value key if this map contains a mapping for the key
 
MyHashMap.prototype.remove = function (key) {
  this.keyArr[key] = -1;
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

 

// Example 1:

// Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// Output: "Sao Paulo" 
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
// Example 2:

// Input: paths = [["B","C"],["D","B"],["C","A"]]
// Output: "A"
// Explanation: All possible trips are: 
// "D" -> "B" -> "C" -> "A". 
// "B" -> "C" -> "A". 
// "C" -> "A". 
// "A". 
// Clearly the destination city is "A".
// Example 3:

// Input: paths = [["A","Z"]]
// Output: "Z"
 

// Constraints:

// 1 <= paths.length <= 100
// paths[i].length == 2
// 1 <= cityAi.length, cityBi.length <= 10
// cityAi != cityBi
// All strings consist of lowercase and uppercase English letters and the space character.
var destCity = function(paths) {
  let arr = [];
  for(let i = 0; i < paths.length; i++) {
      arr.push(paths[i][0])
  }
  for(let i = 0; i < arr.length; i++) {
      if(!arr.includes(paths[i][1])) {
          return paths[i][1]
      }
  }
};