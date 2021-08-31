                              // Binary Heap - are used to implement Priority Queues, 
                              // which are very commonly used data structure
// MaxBinaryHeap 
// - parent nodes are always larger than child nodes
// Each parent has at most two child nodes
// The value of each parent node is always greater than its child nodes
// There no garantees between siblings nodes
// Binary heap is as compact as possible, 
// all of each node are as full as the can be and left children are filled out first
//                        100
//            19                      36
//      17           3           25            1
//    2    7
// For any index of any array n the left child is stored at 2n +1, the right child is at 2n+2
// For any child node at index n its parents is at index (n-1)/2 floored
// class Name: MaxBinaryHeap, Properties: values: values=[]

class MaxBinaryHeap {
  constructor(){
this.values = [];
  }
  // INSERT
insert (element){
  this.values.push(element);
  this.bubbleUp();
}
bubbleUp(){
  let idx = this.values.length - 1;
  const element = this.values[idx];
  while(idx >0) {
  let parentIndex = Math.floor((idx -1)/2);
  let parent = this.values[parentIdx];
  if (element <= parent) break;
    this.values[parentIdx] = element;
    this.values[idx] = parent;
    idx = parentIdx;
  }
  }
  // EXTRACT
  extractMax(){
    const max = this.value[0];
    const end = this.value.pop();
    if( this.values.length >0){
      this.values[0] = end;
      this.sinkDown();

    }
    
    return max;  
  }
  
  // [33,39,41,18,27,12]
  
  sinkDown(){
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while(true){
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length){
        lefChild = this.values[leftChildIdx];
        if (leftChild  > element ){
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx <length){
        rightChild = this.values[rightChildIdx];
        if
        (swap === null && rightChild  > element ) || 
        (swap !== null && rightChild  >leftChild )
        ) {
          swap = rightChildIdx;
        }

      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx=swap;
    }
  }
}
// let heap = new MaxBinaryHeap();
// heap.insert(55);

// [41,39,33,18,27,12,55]
//   0  1  2  3  4  5  6
//                41
//         39            33
//     18      27    12       (55)


  // Priority QUEUE
class ProprityQueue{
  constructor(){
    this.values = [];
  }
  enqueue (val, priority){
    let newNode = new Node (val, priority)
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp(){
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while(idx >0) {
    let parentIdx = Math.floor((idx -1)/2);
    let parent = this.values[parentIdx];
    if (element.priority  >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
    }
    // Dequeue
    dequeue(){
      const min = this.value[0];
      const end = this.value.pop();
      if( this.values.length >0){
        this.values[0] = end;
        this.sinkDown();
  
      }
      
      return min;  
    }
    
    sinkDown(){
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      while(true){
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild, rightChild;
        let swap = null;
  
        if (leftChildIdx < length){
          lefChild = this.values[leftChildIdx];
          if (leftChild.priority < element.priority ){
            swap = leftChildIdx;
          }
        }
        if (rightChildIdx <length){
          rightChild = this.values[rightChildIdx];
          if
          (swap === null && rightChild.priority  < element.priority ) || 
          (swap !== null && rightChild.priority  < leftChild.priority )
          ) {
            swap = rightChildIdx;
          }
  
        }
  
        if (swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx=swap;
      }
    }
  }
  class Node{
    constructor(val, priority){
      this.val = val;
      this.priority = priority;
      this.insertTime = Date.now()
    }
  }
let ER = new PriorityQueue();
ER.enqueue("common cold", 1)
ER.enqueue("gunshot wound", 2)
ER.enqueue("high fever", 5)
ER.enqueue("broken arm", 4)
ER.enqueue("glass in foot", 3)







// MinBinaryHeap 
// -  parent nodes are always smaller than child nodes


// left child 2n +1

// right child 2n+2

// parent is at index (n-1)/2

Class Name:
MaxBinaryHeap

Properties:
values = []

// Adding to a Max Binary Heap
-add to the end
-bubble up bu swapping

//Removing From a Heap
-Remove the root 
-Replace with the most recently added
-Adjust (sink down)

left 2*index+2
right 2*index+2
then swap with the largest




