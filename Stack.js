// LIFO (using for undo/redo, routing(remember pages you have visited and go back/forward) and much more)
// Factorial
function factorial(x){
  if (x === 0) return 1;
  return x * factorial(x-1);
}
factorial(4);

// Array imlementation
// var stack=[]

// stack.push("google")
// stach.push("instagram")
// stack.push("youtube")
// stack
// (3) ["google", "instagram", "youtube"]
// stack.pop()
// "youtube"
// stack.pop()
// "instagram"
// stack.push("amazon")
// 2
// stack.pop()
// "amazon"
// stack.unshift("creat new fiel")
// 1
// stack.unshift("resized fiel")
// 2
// stack.unshift("cloned out wrinkle")
// 3
// stack
// (3) ["cloned out wrinkle", "resized file", "create new file"]
// stack.shift()
// "cloned out wrinkle"
// stack shift()
// "resized file"
// stack.shift()
// "create new file"


// STACK
class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    
  }
}
class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0
  }
}
 push(val){
   var newNode  = new Node(val);
   if (this.size ===0){
     this.first = newNode;
     this.last = newNode;

   } else {
     var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
   }
   
  return ++this.size;
   
 }
 
 pop(){
   if(!this.first ) return null;
   var temp = this.first;
   if(this.first ===this.last){
     this.last = null;
   }
 } else {
  this.first = this.first.next;
  this.size--;
   return temp.value;
    }
    
 }
// Complexity
 Insertion - O(1)
 Removal - O(1)
 Searching - O(N)
 Access - O(N)