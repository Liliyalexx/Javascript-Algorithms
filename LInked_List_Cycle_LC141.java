public class Solution {
  public boolean hasCycle(ListNode head) {
      Set<ListNode> node = new HashSet<>();
      ListNode current = head;
      while(current!=null){
          if(node.contains(current)){
          return true;

      }else{
      node.add(current);
       current = current.next;
  }
  
}
    return false;
}
}

// 3->2->0->-4
//    |______|
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
