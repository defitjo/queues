var Queue = /** @class */ (function () {
  function Queue() {
    this.items = [];
  }
  Object.defineProperty(Queue.prototype, "length", {
    get: function () {
      return this.items.length;
    },
    enumerable: false,
    configurable: true,
  });
  Queue.prototype.peek = function () {
    return this.items[0];
  };
  Queue.prototype.isEmpty = function () {
    return this.items.length === 0;
  };
  Queue.prototype.enqueue = function (data) {
    if (data === null || data === undefined) {
      throw new Error("data cannot be null");
    }
    this.items.push(data);
  };
  Queue.prototype.dequeue = function () {
    if (this.isEmpty()) {
      throw new Error("queue is empty");
    }
    return this.items.shift();
  };
  Queue.prototype.printQueue = function () {
    console.log(this.items);
  };
  return Queue;
})();
var queue = new Queue();
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
