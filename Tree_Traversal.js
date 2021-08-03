// Traversing_a_tree
// two ways: 
// - Breadth-first Search (shirina) BFS
// - Depth-first Search (glubina) DFS - InOrder, PreOrder, PostOrder
//                    10
//               6          15
//            3     8             20

// QUEUE:[]
// VISITED:[10, 6, 15, 3, 8, 20] 

class Node {
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
  insert(value){
      var newNode = new Node(value);
      if(this.root === null){
          this.root = newNode;
          return this;
      }
      var current = this.root;
      while(true){
          if(value === current.value) return undefined;
          if(value < current.value){
              if(current.left === null){
                  current.left = newNode;
                  return this;
              }
              current = current.left;
          } else {
              if(current.right === null){
                  current.right = newNode;
                  return this;
              } 
              current = current.right;
          }
      }
  }
  find(value){
      if(this.root === null) return false;
      var current = this.root,
          found = false;
      while(current && !found){
          if(value < current.value){
              current = current.left;
          } else if(value > current.value){
              current = current.right;
          } else {
              found = true;
          }
      }
      if(!found) return undefined;
      return current;
  }
  contains(value){
      if(this.root === null) return false;
      var current = this.root,
          found = false;
      while(current && !found){
          if(value < current.value){
              current = current.left;
          } else if(value > current.value){
              current = current.right;
          } else {
              return true;
          }
      }
      return false;
  }
  BFS(){
      var node = this.root,
          data = [],
          queue = [];
      queue.push(node);

      while(queue.length){
         node = queue.shift();
         data.push(node.value);
         if(node.left) queue.push(node.left);
         if(node.right) queue.push(node.right);
      }
      return data;
  }
  DFSPreOrder(){
      var data = [];
      function traverse(node){
          data.push(node.value);
          if(node.left) traverse(node.left);
          if(node.right) traverse(node.right);
      }
      traverse(this.root);
      return data;
  }
  DFSPostOrder(){
      var data = [];
      function traverse(node){
          if(node.left) traverse(node.left);
          if(node.right) traverse(node.right);
          data.push(node.value);
      }
      traverse(this.root);
      return data;
  }
  DFSInOrder(){
      var data = [];
      function traverse(node){
          if(node.left) traverse(node.left);
          data.push(node.value);
          if(node.right) traverse(node.right);
      }
      traverse(this.root);
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
tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInOrder();

// 144. Binary Tree Preorder Traversal (Java)
class Solution {
  static ArrayList<Integer> ans;
  public List<Integer> preorderTraversal(TreeNode root) {
      ans=new ArrayList<>();
      preorder(root);
      return ans;
  }
  public static void preorder(TreeNode root){
      if(root!=null){
      ans.add(root.val);
      preorder(root.left);
      preorder(root.right);
  }
  }
}``
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
public void preorder(TreeNode root,List list)
    {
         if(root == null) return ;
        list.add(root.val);
        preorder(root.left,list);
        preorder(root.right,list);
    }
    public List preorderTraversal(TreeNode root) {
       
        List ans = new ArrayList<>();
         preorder(root,ans);
        return ans;
    }
}
// *****************************************************************
1)
//Recursive Solution //DFS
class Solution 
{
    List<Integer> res= new ArrayList<>();//global ArrayList 

    public List<Integer> preorderTraversal(TreeNode root)
    {
         if(root==null)//base case for the null graph 
             return res;

         preorder(root);//calling the preorder in order  

         return res;//returning gthe resultant array list 
    }

    public void preorder(TreeNode root)
    {
        if(root==null)//base case when we reach to the null node while recuring down hill, returning to the calling function and deleting the  activation record 
            return;//returning to the call function or the active acttib=vation record 
        
        res.add(root.val);//adding first the value, as we first see the root we are adding it to the ArrayList (Root Left Right)
        
        preorder(root.left);//recursing down hill in search of left node 
        preorder(root.right);//after the left node is done fo the particular activation record , we are going downhill for the right node search 
        
        return;//returning to the calling function or the active activation record and deleting this activation record as all the fuction are completed 
    }
}//Please do Upvote, It helps a lot
2)
//Non-Recursive Solution 
class Solution 
{
    public List<Integer> preorderTraversal(TreeNode root) 
    {
        List<Integer> list=new ArrayList<>();//for storing the element inorder 
        
        if(root == null)//base case when the tree is empty
            return list;
        
        Stack<TreeNode> stack= new Stack<>();
        
        stack.push(root);//pushing the root node 
        
        while(!stack.isEmpty())//terminating condition 
        {
            TreeNode temp=stack.pop();//popping the top element 
            
            list.add(temp.val);//adding the value to the ArrayList //Root
            
            if(temp.right != null)//first pushing the right because to access the left first and then the right //Right
                stack.push(temp.right);//pushing the right node 
            
            if(temp.left != null)//pushing the left node if present after right because to access the left first //Left
                stack.push(temp.left);
        }//the main purpose of pushing this way is to achive Root Left Right pattern of Inorder Traversal 
        return list;//returning the List of integer that are stored in Inorder fashion 
    }
}//Please do Upvote, It helps a lot

class Solution {
  public List<Integer> preorderTraversal(TreeNode root) {
      List<Integer> out = new ArrayList<Integer>();
      Stack<TreeNode> s = new Stack<>();
  if (root == null){
      return out;
  }
      s.push(root);
      while (!s.isEmpty()){
      TreeNode temp = s.pop();
          out.add(temp.val);
      if (temp.right!=null){
          s.push(temp.right);
      }
      if(temp.left!=null){
      s.push(temp.left);
          }
      }
      return out;
  }
}

// 94. Binary Tree Inorder Traversal
// Recursive solution
class Solution {
  public List<Integer> inorderTraversal(TreeNode root) {
      List<Integer> list = new ArrayList<Integer>();
      if (root==null) return list;
      inorder(root, list);
      return list;
  }
  public void inorder(TreeNode root, List<Integer> list){
  if(root!=null) {
  if(root.left!=null){
      inorder(root.left, list);
  }
      list.add(root.val);
      if(root.right!=null){
        inorder(root.right, list);
          
          }
  }
  }
}
Time complexity : O(n)O(n). The time complexity is O(n)O(n) because the recursive function is T(n) = 2 \cdot T(n/2)+1T(n)=2⋅T(n/2)+1.

Space complexity : The worst case space required is O(n)O(n), and in the average case it's O(\log n)O(logn) where nn is number of nodes.



