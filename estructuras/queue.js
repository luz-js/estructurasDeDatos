class Queue{
    constructor(){
        this.items = {};
        this.front = 0;
        this.end = 0;
    }

    enqueue(data){
        this.items[this.end] = data;
        this.end++;
    }

    dequeue(){
        delete this.items[this.front];
        this.front++;
    }

    getZise(){
      return this.end - this.front;
    }

    pintar(){
      return this.items;
    }

}

var queue = new Queue();
queue.enqueue("luz");
queue.enqueue("ramon");
queue.enqueue("alexander");
queue.enqueue("luz");
queue.enqueue("ramon");
queue.enqueue("alexander");
queue.dequeue();
queue.dequeue();
console.log(queue.pintar());
console.log(queue.getZise())