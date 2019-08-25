/* eslint-disable dot-notation */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = null;
  }

  peek() {
    return this.top;
  }

  push(val) {
    const node = new Node(val);
    if (this.length === 0) {
      this.top = node;
      this.bottom = node;
    } else {
      const pointer = this.top;
      this.top = node;
      this.top.next = pointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      return null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack();
myStack.push('apple');
myStack.push('banana');
myStack.push('Cherry');

console.log(myStack);
console.log(myStack.peek());
myStack.pop();
console.log(myStack);
