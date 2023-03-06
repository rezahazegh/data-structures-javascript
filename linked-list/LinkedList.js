import LNode from './LNode.js';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    const node = new LNode(element);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  elementAt(index) {
    let element = this.head;
    let it = 0;
    while (it < index) {
      element = element.next;
      it++;
    }
    return element;
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      return console.log('Please enter a valid index.');
    } else {
      const node = new LNode(element);

      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        let curr = this.head;
        let prev;
        let it = 0;

        while (it < index) {
          prev = curr;
          curr = curr.next;
          it++;
        }

        prev.next = node;
        node.next = curr;
      }
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return console.log('Please enter a valid index.');
    } else {
      let it = 0;
      let curr = this.head;
      let prev;

      if (index === 0) {
        this.head = curr.next;
      } else {
        while (it < index) {
          prev = curr;
          curr = curr.next;
          it++;
        }
        prev.next = curr.next;
      }

      this.size--;
      return curr.element;
    }
  }

  removeElement(element) {
    let curr = this.head;
    let prev = null;

    while (curr !== null) {
      if (curr.element === element) {
        if (prev === null) {
          this.head = curr.next;
        } else {
          prev.next = curr.next;
        }
        this.size--;
        return curr.element;
      }
      prev = curr;
      curr = curr.next;
    }

    return -1;
  }

  indexOf(element) {
    let curr = this.head;
    let index = 0;

    while (curr !== null) {
      if (curr.element === element) {
        return index;
      }
      curr = curr.next;
      index++;
    }
    return -1;
  }

  isEmpty() {
    return this.size === 0;
  }

  sizeOfList() {
    return this.size;
  }

  printList() {
    let curr = this.head;
    let str = '';
    while (curr) {
      str += curr.element + ' ';
      curr = curr.next;
    }
    console.log(str);
  }
}
