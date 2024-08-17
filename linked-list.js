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
    // if (this.head === null) this.head = newNode;
    // else {
    //   let last = this.head;
    //   while (last.next !== null) {
    //     last = last.next;
    //   }

    //   last.next = newNode;
    // }

    const tail = this.getTail();
    if (!tail) this.head = newNode;
    else tail.next = newNode;
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

  getHead() {
    return this.head;
  }

  getTail() {
    if (!this.head) return null;

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    return current;
  }

  at(index) {
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  pop() {
    let current = this.head;
    let previous;

    while (current.next !== null) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
  }

  contains(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) return true;
      current = current.next;
    }

    return false;
  }

  //returns index of a node with the specified value
  find(value) {
    let current = this.head;

    for (let i = 0; i < this.size(); i++, current = current.next) {
      if (current.value === value) return i;
    }

    return null;
  }

  toString() {
    let string = '';
    let current = this.head;

    while (current !== null) {
      string += current.value + ' -> ';
      current = current.next;
    }

    string += ' null';

    return string;
  }

  insertAt(value, index) {
    let previousNode = this.at(index - 1);
    let nodeAtIndex = this.at(index);

    const newNode = new Node(value, nodeAtIndex);

    previousNode.next = newNode;
  }

  removeAt(index) {
    if (index > this.size() - 1) return;
    else if (index === 0) this.head = this.head.next;
    else {
      let precedingNode = this.at(index - 1);

      precedingNode.next = precedingNode.next.next;
    }
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
list.append(9);

console.log(list.getTail());

list.insertAt('matty', 6);

console.log('List: ', list.toString());
