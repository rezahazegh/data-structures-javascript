import Queue from './Queue.js';

const qu = new Queue();
qu.enqueue('reza');
qu.enqueue('behnam');
qu.enqueue('bita');
qu.dequeue();
qu.dequeue();
qu.enqueue('nika');
qu.printQueue();
