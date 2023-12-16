class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  // pushing a data in to queue
  enQueue(value) {
    const node = new Node(value);
    if (!this.front) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
      this.size++;
    }
  }

  // removing an element fron the queue
  deQueue() {
    if (!this.front) {
      return null;
    }

    let data = this.front.value;
    this.front = this.front.next;
    this.size--;
    return data;
  }

  // get the size of the queue
  getSize() {
    return this.size ? this.size : 0;
  }

  // find the peek
  peek() {
    return this.front ? this.front.value : null;
  }

  // display
  display() {
    let front = this.front;
    while (front) {
      console.log(front.value);
      front = front.next;
    }
  }
}

const queue = new Queue();

// adding an element in to the queue
queue.enQueue(10);
queue.enQueue(20);
queue.enQueue(30);

// remove the element
queue.deQueue();

// get size
console.log(queue.getSize());

// find peek
console.log(queue.peek());

queue.display();
