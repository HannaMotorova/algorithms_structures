class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
    }

    pop() {
        if (!this.top) return null;
        const value = this.top.value;
        this.top = this.top.next;
        this.length--;
        return value;
    }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());

while(stack.length > 0) {
    console.log(stack.pop());
}