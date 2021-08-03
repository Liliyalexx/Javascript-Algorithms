// TREES 
// - HTML DOM
// - Network Routing
// - Abstract Syntax TREES
// - Artificial Intelligence
// - Folders in Operating Systems
// - Computer File Systems
// - JSON

// TREES
// Binary TREES(can have: 0, 1, 2, children)
// Binary Search Trees - are non-linear data structure
// (with  2 children per node and they are compareble, 
// every node to the left is less then parent and every 
// node to the right is always greater then parent)

class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor(){
    this.root = null;
  }
}

// INSERT
insert(value){
  var newNode = new Node(value);
  if (this.root===null) {
    this.root = newNode;
    return this;
  } 
    var current = this.root;
    while(true){
      if(value === current.value) return undefined;
      if (value < current.value) {
        if (current.left ===null) {
          current.left = newNode;
          return this;
        } 
          current = current.left;
      } else { 
        if(current.right ===null){
          current.right = newNode;
          return this;

        } 
          current = current.right;
        }
      }
    }

        // FIND
    contains (value){
      if (this.root === null) return false;
      var found = false;
      var current = this.root;
      while (current && !found) {
      if (value < current.value) {
          current = current.left;
        } else if (value> current.value) {
          current = current.right;
        } else {
          found = true;
        }
      }
    return false;
  }
}

 //         10 
//    5          13
// 2    7   11        16

// var tree = new BinarySearchTree();
// tree.insert(10)
// tree.insert(5)
// tree.insert(13)
// tree.insert(11)
// tree.insert(2)
// tree.insert(16)
// tree.insert(7)
// Traversing_a_tree
// two ways: 
// - Breadth-first Search (shirina) BFS
// - Depth-first Search (glubina) DFS - InOrder, PreOrder, PostOrder
//                    10
//               6          15
//            3     8             20

// QUEUE:[]
// DATA:[10, 6, 15, 3, 8, 20] 

BFS(){
  var data = [],
      queue = [];
      node = this.root,
      queue.push(node);

      while(queue.length){
          node = queue.shift();
          data.push(node.value);
          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right);
      }
      return data;
  //  DATA:[10, 6, 15, 3, 8, 20] 
  DFSPreOrder(){
       var data = [];
        function traverse(node){
          data.push(node.value);
          if (node.left) traverse (node.left);
          if (node.right) traverse (node.right);
        }
        traverse(this.root);
  }
  return data;
  // [10,6,3,8,15,20]

  DFSPostOrder(){
    var data = [];
    function traverse(node){
      if (node.left)traverse (node.left);
      if (node.right) traverse (node.right);
       data.push(node.value);
    }
    traverse(this.root);
  }
  return data;
}
// [3,8,6,20,15,10]

// 
DFSInOrder(){      
  var data=[];
  function traverse (node){
  node.left && traverse (node.left);
  data.push(node.value);
  node.right && traverse (node.right);
  }
  traverse(this.root);

}
return data;
// [3,6,8,10,15,20]
//                    10
//               6          15
//            3     8             20

// BFS or DFS same time complexity
// Depends on a tree.


 var tree = new BinarySearchTree();
 tree.insert(10);
 tree.insert(6);
 tree.insert(15);
 tree.insert(3);
 tree.insert(8);
 tree.insert(20);
 tree.DFSPreOrder()
 tree.DFSPostOrder()
// Complexity 
Insertion - O(log n)
Searching - O(log n)