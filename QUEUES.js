// FIFO (Backloading tasks, Uploading resources, Printing/Task processing)
// QUEUES.js

class Node{
  constructor(values){
    this.value = value;
     this.next = null;
  }
}
class Queue{
  constructor(){
    this.first = null, 
    this.last = null; 
    this.size = 0;
  }
  // ENQUEUE (from the end)
  enqueue(val){
    var newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;

    }else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  // DEQUEUE remove from the beginning in order to give us a first thing we added in
  
  dequeue(val){
    if(!this.first) return null;
    var temp = this.first;
    if(this.first === this.last){
      this.last = null;
    } 
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
// var q = [];

// q.push("first")
// 1
// q.push("second")
// 2
// q.push("third")
// 3
// q
// []
// q.shift()
// "first"
// q.shift()
// "second"
// q.shift()
// "third"
// q
// []
// q.unshift("first")
// 1
// q.unshift("first")
// 2
// q.unshift("first")
// 3
// (3)["third", "second", "first"]
// q.pop()
// "first"
// q.pop()
// "second"
// q.pop()
// "third"


Big O of Queues
insertion - O(1)
Removal - O(1)
Searching - O(N)
Access - O(N)

