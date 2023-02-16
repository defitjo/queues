class Queue:

    def __init__(self):
        self.items = []

    def __len__(self):
        return len(self.items)

    def peek(self):
        return self.items[0]

    def is_empty(self):
        return self.items == []

    def enqueue(self, data):
        if data is None:
            raise TypeError('data cannot be None')
        self.items.append(data)

    def dequeue(self):
        if self.is_empty():
            raise Exception('queue is empty')
        return self.items.pop(0)

    def print_queue(self):
        print(self.items)


queue = Queue()
print('Queue is empty? =', queue.is_empty())
queue.enqueue('a')
queue.enqueue('b')
queue.enqueue('c')
queue.enqueue(1)
queue.enqueue(2)
print('Peek queue:', queue.peek())
print('Queue length:', queue.__len__())
queue.print_queue()
print('Dequeue:', queue.dequeue())
queue.print_queue()
