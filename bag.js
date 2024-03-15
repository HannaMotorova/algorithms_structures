class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Bag {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;}
        else {
            this.tail.next = newNode;
            this.tail = newNode; }
        this.length++;
    }
}

const bag = new Bag();
bag.add("apple");
bag.add("banana");
bag.add("apple");
bag.add("orange");

console.log(bag);