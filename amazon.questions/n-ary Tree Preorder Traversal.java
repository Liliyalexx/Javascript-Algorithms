// Given the root of an n-ary tree, return the preorder traversal of 
// its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal. 
// Each group of children is separated by the null value (See examples)
// Input: root = [1,null,3,2,4,null,5,6]
// Output: [1,3,5,6,2,4]
class Solution {
  public List<Integer> preorder(Node root) {
    Stack<Node> s = new Stack<>();
    Node node = root;
    List<Integer> out = new ArrayList<Integer>();
    while (!s.isEmpty() || node != null) {
      while (node != null) {
        out.add(node.val);
        for (int i = node.children.size() - 1; i >= 1; i--) {
          s.add(node.children.get(i));
        }
        if (node.children.size() > 0)
          node = node.children.get(0);
        else
          node = null;
      }
      if (!s.isEmpty()) {
        node = s.pop();
      }

    }
    return out;
  }
}
