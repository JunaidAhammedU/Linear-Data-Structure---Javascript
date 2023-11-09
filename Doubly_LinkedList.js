// Node class for storing data and pointers
class Node {
  constructor(value) {
    this.value = value; // Value of the node.
    this.prev = null; // Pointer to the previous node.
    this.next = null; // Pointer to the next node.
  }
}

// Doubly Linked List class
class DoublyLinkedList {
  constructor() {
    this.head = null; // Head of the doubly linked list.
    this.tail = null; // Tail of the doubly linked list.
  }

  // Append a value to the end of the list
  append(value) {
    const node = new Node(value); // Create a new node with the given value.

    if (!this.head) {
      // If the list is empty, set the new node as both head and tail.
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail; // Set the new node's previous pointer to the current tail.
      this.tail.next = node; // Set the current tail's next pointer to the new node.
      this.tail = node; // Update the tail to be the new node.
    }
  }

  // Prepend a value to the beginning of the list
  prepend(value) {
    const node = new Node(value); // Create a new node with the given value.

    if (!this.head) {
      // If the list is empty, set the new node as both head and tail.
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head; // Set the new node's next pointer to the current head.
      this.head.prev = node; // Set the current head's previous pointer to the new node.
      this.head = node; // Update the head to be the new node.
    }
  }

  // Search for a value in the list
  search(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current.value; // Return the value if found.
      }
      current = current.next;
    }
    return null; // Return null if the value is not found.
  }

  // Display the values in the list
  display() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// Creating and using the doubly linked list
const doublyList = new DoublyLinkedList();

// Appending values to the list
doublyList.append(10);
doublyList.append(20);
doublyList.append(30);

// Prepending values to the list
doublyList.prepend(5);
doublyList.prepend(15);

console.log(doublyList.search(20)); // Output: 20

// Displaying the values in the list
doublyList.display();
