export default class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) return 'Underflow';
    return this.items.pop();
  }

  peek() {
    if (this.items.length === 0) return 'Underflow';
    const last = this.items.length - 1;
    return this.items[last];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printStack() {
    console.log(this.items.join(','));
  }
}
