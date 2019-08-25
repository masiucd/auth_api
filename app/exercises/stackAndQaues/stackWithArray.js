class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.stack = [];
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  push(val) {
    this.stack.push(val);
    return this;
  }

  pop() {
    this.stack.pop();
    return this;
  }
}

const stack = new Stack();

console.log(stack.push('apples'));
console.log(stack.push('oranges'));
console.log(stack.push('bananas'));
console.log(stack.peek());
console.log(stack.pop());
console.log(stack);
