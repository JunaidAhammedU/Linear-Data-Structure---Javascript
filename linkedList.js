// Node class for storing data and pointer
class Node {
  constructor(value) {
    this.value = value; // Value of the node.
    this.next = null; // Pointer to the next node.
  }
}

// Linked List class
class LinkedList {
  constructor() {
    this.head = null; // Head of the linked list.
    this.tail = null; // Tail of the linked list.
  }

  // Append a value to the end of the list
  append(value) {
    const node = new Node(value); // Create a new node with the given value.

    if (!this.head) {
      // If the list is empty, set the new node as both head and tail.
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node; // Insert the new node after the current tail.
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

// Creating and using the linked list
const list = new LinkedList();

// Appending values to the list
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);

// Prepending values to the list
list.prepend(5);
list.prepend(15);
list.prepend(25);

console.log(list.search(20)); // Output: 20

// Displaying the values in the list
list.display();
