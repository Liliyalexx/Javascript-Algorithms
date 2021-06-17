// 1->3->2->3->5->4->5->Null

// 1)

void deleteDups(LinkedListNode n) {
  HashSet<Integer> set = new HashSet<Integer>();
  LinkedListNode previous = null;
  while ( n ! =null){
    if( set.contains(n.data)){
      previous.next = n.next;
    } else{
      set.add(n.data);
      previous = n;
    }
    n = n.next;
  }
}
// O(N) whre N is number of ele,emts in the linked list

// 2)
void deleteDups(LinkedListNode head){
while(current!=null){
  LinkedListNode runner = current;
  while( runner.next ! = null){
    if (runner.next.data = current.data){
      runner.next = runner.next.next; 
        } else{
          runner=runner.next;
        }
      }
current=current.next;
}
}

this code runs O(1) space, but O(N2) time.

