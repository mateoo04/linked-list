class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.next = nextNode;
  }

  getValue() {
    return this.value;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) this.head = newNode;
    else {
      let last = this.head;
      while (last.next !== null) {
        last = last.next;
      }

      last.next = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value, head);

    if (this.head === null) this.head = newNode;
    else this.head = newNode;
  }

  size() {
    let size = 0;
    if (this.head !== null) {
      let current = this.head;
      while (current !== null) {
        size++;
        current = current.next;
      }
    }

    return size;
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.append('matteo');

console.log(list.size());
