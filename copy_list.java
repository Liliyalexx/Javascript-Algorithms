Solution 1: Space Complexity - O(n) and Time Complexity - O(n)

public Node copyRandomList(Node head) {

    if(head==null) return null;
    
    Node temp = head;
    Map<Node,Node> hm = new HashMap<>();
    
    while(temp!=null){
        Node myNode = new Node(temp.val);
        hm.put(temp,myNode);
        temp = temp.next;
    }
    
    temp = head;
    while(temp!=null){
        Node myNode = hm.get(temp);
        myNode.next = hm.get(temp.next);
        myNode.random = hm.get(temp.random);
        temp = temp.next;
    }
    
    return hm.get(head);
}


Solution 2: Space Complexity - O(1) and Time Complexity - O(n)

 public Node copyRandomList(Node head) {
    
    if(head==null) return null;
    
    // Forming a connected linked list of orginal and copy nodes
    Node temp = head;
    while(temp!=null){
        Node nextNode = temp.next;
        Node myNode = new Node(temp.val);
        temp.next = myNode;
        myNode.next = nextNode;
        temp = temp.next.next;
    }
    
    // Placing the random pointers
    temp = head;
    while(temp!=null){
        if(temp.random!=null)
            temp.next.random = temp.random.next;
        else
            temp.next.random = null;
        
        temp = temp.next.next;
    }
    
    /* 
    *  Placing the next pointers in their original place
    *  Connecting the copy linked list
    */
    Node ans = head.next, nextNode = null;
    temp = head;  
    while(temp!=null){
        nextNode = temp.next;
        
        temp.next = temp.next.next;
        
        if(nextNode.next!=null)
            nextNode.next = nextNode.next.next;
        
        temp = temp.next;
    }
    
    return ans;
}