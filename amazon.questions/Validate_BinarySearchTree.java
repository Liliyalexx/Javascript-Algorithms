
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
// Input: root = [2,1,3]
// Output: true
// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

//recursion
class Solution{
  public boolean isValidBST(TreeNode root){
  return validate(root, null, null);
  }
      
   public boolean validate(TreeNode root, Integer max, Integer min){
      if(root ==null){
          return true;
      } else if(max !=null && root.val>=max || min!= null && root.val <= min){
         return false;
      } else {
          return validate(root.left, root.val, min) && validate(root.right, max, root.val);
      }
   }   
      
  }
  // Space Complexity: O(n);
  // Run Time: O(n);

  //Stack
class Solution {
  public boolean isValidBST(TreeNode root) {
      Stack<TreeNode> stack = new Stack();
      double left_child_val = -Double.MAX_VALUE;
      
      while (!stack.isEmpty() || root !=null){
         while(root !=null){
          stack.push(root);
             root = root.left;
         } 
          
          
          root = stack.pop();
          if(root.val <= left_child_val) return false;
          left_child_val = root.val;
          root = root.right;
          
      }
      
      return true;
  }
}