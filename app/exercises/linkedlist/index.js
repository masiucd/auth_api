// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head) {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }
}

const myLinkedList = new LinkedList();
myLinkedList.head = new Node(4);
myLinkedList.insertFirst(7);
myLinkedList.insertFirst(12);
console.log(myLinkedList.size());

module.exports = { Node, LinkedList };
