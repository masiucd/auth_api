// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor(myQueue) {
    this.myQueue = [];
  }

  add(val) {
    this.myQueue.unshift(val);
    return this.myQueue; // add to the end
  }

  remove() {
    return this.myQueue.pop(); // remove from the end
  }
}
const arr = new Queue();
arr.add(1);
arr.add(2);
arr.add(3);
arr.add(4);
arr.remove();
console.log(arr);

module.exports = Queue;
