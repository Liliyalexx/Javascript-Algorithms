//Given the root of a binary tree, 
// return the inorder traversal of its nodes' values.
// Input: root = [1,null,2,3]
// Output: [1,3,2]
public class Solution {
  public List<Integer> inorderTraversal(TreeNode root){
    List<Integer> out = new ArrayList<>();
     Stack <TreeNode> s = new Stack<>();
      TreeNode curr = root;
      while(curr!=null || !s.isEmpty()){
      while(curr!=null){
         s.push(curr);
          curr=curr.left;
      }
          curr = s.pop();
          out.add(curr.val);
          curr = curr.right;
          
          }
      return out;
      
  }
      
      
 }