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
