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
  extractMax(){

  }
  }



let heap = new MaxBinaryHeap();
heap.insert(55);

// [41,39,33,18,27,12,55]
//   0  1  2  3  4  5  6
//                41
//         39            33
//     18      27    12       (55)



// MinBinaryHeap 
// -  parent nodes are always smaller than child nodes


