class Queue {
  items: any[];

  constructor() {
    this.items = [];
  }

  get length(): number {
    return this.items.length;
  }

  peek(): any {
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  enqueue(data: any): void {
    if (data === null || data === undefined) {
      throw new Error("data cannot be null");
    }
    this.items.push(data);
  }

  dequeue(): any {
    if (this.isEmpty()) {
      throw new Error("queue is empty");
    }
    return this.items.shift();
  }

  printQueue(): void {
    console.log(this.items);
  }
}

let queue = new Queue();
console.log("Queue is empty? = " + queue.isEmpty());
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
queue.enqueue(1);
queue.enqueue(2);
console.log("Peek Queue: " + queue.peek());
console.log("Queue length: " + queue.length);
queue.printQueue();
console.log("Dequeue: " + queue.dequeue());
queue.printQueue();
