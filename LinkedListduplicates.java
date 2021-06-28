`// JavaScript program to remove duplicates
// from unsorted linkedlist

class node {

  constructor(val) {
      this.val = val;
      this.next = null;
  }
}

/*
Function to remove duplicates
from a unsorted linked list
*/
function removeDuplicate(head) {
  // Hash to store seen values
  var hs = new Set();

  /* Pick elements one by one */
  var current = head;
  var prev = null;
  while (current != null) {
      var curval = current.val;
      // If current value is seen before
      if (hs.has(curval)) {
          prev.next = current.next;
      } else {
          hs.add(curval);
          prev = current;
      }
      current = current.next;
  }

}

/* Function to print nodes in a
given linked list */
function printList(head) {
  while (head != null) {
      console.log(head.val + " ");
      head = head.next;
  }
}


/*
* The constructed linked list is:
10->12->11->11->12->11->10
*/
start = new node(10);
start.next = new node(12);
start.next.next = new node(11);
start.next.next.next = new node(11);
start.next.next.next.next = new node(12);
start.next.next.next.next.next = new node(11);
start.next.next.next.next.next.next = new node(10);

console.log(
  "Linked list before removing duplicates :<br/>"
);
printList(start);

removeDuplicate(start);

console.log(
  "<br/>Linked list after removing duplicates :<br/>"
);
printList(start);
