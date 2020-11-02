// Traversing_a_tree
// two ways: 
// - Breadth-first Search (shirina) BFS
// - Depth-first Search (glubina) DFS - InOrder, PreOrder, PostOrder
//                    10
//               6          15
//            3     8             20

// QUEUE:[]
// VISITED:[10, 6, 15, 3, 8, 20] 

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
  }
}
 var tree = new BinarySearchTree();
 tree.insert(10);
 tree.insert(6);
 tree.insert(15);
 tree.insert(3);
 tree.insert(8);
 tree.insert(20);