// Kth to last element in Linked List
// list = 1 -> 2 -> 3 -> 4 -> 5

// k = 1, output = 4
// k = 2, output = 3
// k = 3, output = 2
// k = 4, output = 1
// k = 5, output = 0

// length - k 
// 5 -1 (4 steps)
//*******************/
// while (Node !=0){
  // for( i = 0; i< length; i++){
//   length-k
// } }
// O(2*k)
//O(k)

// we will do two pointers:
// curr
// follow

// list = 1 -> 2 -> 3 -> 4 -> 5 -> null (k=3)
      //                          (fast)^               
      //
      //         (slow=k)^
      //    
// Java
private class Node {
  private int value;
  private Node next;
}

public Node kthToLast(Node node, int k){
       Node curr = node;
       Node follower = node;
       for( int i = 0; i < k; i++){ //what we do if k > the Linked List?
         if (curr == null) return null;
         curr = curr.next;           
       }

       while ( curr.next !=null) {
         curr = curr.next;
         follower = follower.next;
       }
       return follower;

}
// Java - Iterative
  LinkedListNode nthToLast(LinkedListNode head, int k){
  LinkedListNode p1=head;
  LinkedListNode p2= head;
  // Move p1k odes into the list
  for (int i=o; i < k; i++){
    if(p1 ==null) return null;//Out of bounds
    p1=p1.next;
  }
  // Move them at he same pace. When p1 hits the end, p2 will be at the right element.
  while( p1!=null){
    p1 = p1.next;
    p2 = p2.next;
  }
  return p2;

}
//Time: O(n)
//Space: O(1)


// ***********************************************************************

// Recursive

int printKthToLast(LinkedList Node head, int k){
  if(head ==null){
    return 0;
  }
  int index  = printKthToLast(head.next, k) + 1;
  if (index==k){
    System.out.println(k + "th to last node is " + head.data);
  }
  return index;
}



//  Create a Wrapper Class

class Index{
  public int value = 0;
}
LinkedListNode kthToLast(LinkedListNode head, int k){
Index idx = new Index();
return kthToLast(head, k, idx);
}
LinkedListNode kthToLast(LinkedListNode head, int k, Index idx){
if( head ==null) return null;

LinkedListNode node - kthToLast(head.next, k, idx);
idx.value =idx.value+1;
if (idx.value ==k)
{
  return head;
}
return node;
}

