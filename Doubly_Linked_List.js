// Node
// -val 
// -next 
// -prev 
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// DoublyLinkedList
// -head
// -tail
// -length
class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
// PUSH ( from the end)
 push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    } 

// POP (delete from the end)
pop(){
        if(!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

// SHIFT (remove the node from the beginning)

shift(){
        if(this.length === 0) return undefined;
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

// UNSHIFT (adding a node to the beginning)
unshift(val){
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    // GET (accessing a node by its position)
    get(val){
      if(index < 0 || index >= this.length) return null;
      var count, current;
      if (index <= this.length/2){
        count=0;
        current = this.head;
        while(count !==index){
        current = current.next;
        count++;
      }
    } else {
      count = this.length -1;
      current = this.tail;
      while (count !==index){
          current = current.prev;
          count--;
        }      
    }
    return current;
    }

    // SET replacing the value of a node to the in Doubly Linked List

      set(index, val){
        var foundNode = this.get(index);
        if(foundNode ! == 0 ){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    
    // INSERT (by a certain position)
insert(index, val){
  if(index < 0 || index > this.length ) return false;
  if (index === 0) return !!this.unshift(val);
  if (index === this.length) return !!this.push(val);

  var newNode = new Node(val);
  var beforeNode =this.get(index-1);
  var afterNode = beforeNode.next;

  beforeNode.next = newNode, newNode.prev = beforeNode;
  newNode.next = afterNode, afterNode.prev = newNode;
  this.length ++;
  return true;

}
remove(index){
if(index < 0 || index >= this.length ) return false;
if(index ===0) return !!this.shift();
if(index === this.length-1) return this.pop();
var remove = this.get(index);
var beforeNode = removedNode.prev;
var afterNode = removedNod.next;
beforeNode.next = afterNode;
afterNode.prev = beforeNode;
// removedNode.prev.next = removedNode.next;
// removedNode.next.prev = removedNode.prev;
removedNode.next = null;
removedNode.prev = null;
this.length--;
return removedNode;

}

}



var list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")

// Insertion - O(1)
// Removal - O(1)
// Sesarching - O(N)
// Access - O