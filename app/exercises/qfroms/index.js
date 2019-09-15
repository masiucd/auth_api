// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
//
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  add(val) {
    this.s1.data.push(val);
  }

  remove() {
    while (this.s1.peek()) {
      const last = this.s1.pop();
      this.s2.push(last);
    }
    const record = this.s2.pop();

    while (this.s2.peek()) {
      const last = this.s2.pop();
      this.s1.push(last);
    }
    return record;
  }

  peek() {
    while (this.s1.peek()) {
      this.s2.push(this.s1.pop());
    }
    const record = this.s2.peek();
    while (this.s2.peek()) {
      this.s1.push(this.s2.pop());
    }
    return record;
  }
}

const q = new Queue();
q.add(5);
q.add(2);
q.add(9);
console.log(q);
q.remove();
console.log(q);
console.log(q.peek());

module.exports = Queue;
