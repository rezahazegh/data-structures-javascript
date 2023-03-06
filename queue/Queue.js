export default class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  enqueue(element) {
    this.items[this.backIndex] = element;
    this.backIndex++;
  }

  dequeue() {
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }

  peek() {
    return this.items[this.frontIndex];
  }

  isEmpty() {
    return this.backIndex === this.frontIndex;
  }

  printQueue() {
    let str = '';
    for (const item in this.items) {
      str += this.items[item] + ', ';
    }
    console.log(str);
  }
}
