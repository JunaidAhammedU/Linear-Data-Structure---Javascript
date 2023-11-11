class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  Push(value) {
    const node = new Node(value);

    if (!this.top) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
      this.size++;
    }
  }

  Pop() {
    if (!this.top) {
      return null;
    } else {
      let current = this.top.value;
      this.top = this.top.next;
      this.size--;
      return current;
    }
  }

  Peek() {
    return this.top ? this.top.value : null;
  }

  getSize() {
    return this.size
  }

  display() {
    if (!this.top) {
      return null;
    }

    let current = this.top;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const stack = new Stack();

// pushing a value
stack.Push(10);
stack.Push(20);
stack.Push(30);
stack.Push(40);

// poped a value
stack.Pop();

console.log(stack.Peek());
console.log(stack.getSize());

stack.display();
