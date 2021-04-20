/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to top of the stack. Returns undefined. */

  push(val) {
    let newVal = new Node(val);

    if (!this.first) {
      this.first = newVal;
      this.last = this.first;
    } else {
      let old = this.first;
      this.first = newVal;
      this.first.next = old;
    }
    this.size += 1;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.first) throw new Error("Cannot pop! Stack is empty");

    let removed = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    // set first to be what came after first, which will be null if queue has only one item
    this.first = this.first.next;
    this.size -= 1;
    return removed.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
