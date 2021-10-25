function list() {
    this.head = null;
    this.tail = null;
    this.length = 0;

    this.createNode = (value) => {
        return {value: value, next: null};
    }

    this.addNode = (value) => {
        this.length++;

        if (this.head === null) {
            this.tail = this.createNode(value);
            this.head = this.tail;

            return;
        }

        this.tail.next = this.createNode(value);
        this.tail = this.tail.next;
    }

    this.addNodeToHead = (value) => {
        if (this.head) {
            const oldHead = this.head;
            this.head = this.createNode(value);
            this.head.next = oldHead;
            this.length++;

            return;
        }

        this.addNode(value);
    }

    this.removeNode = (pos) => {
        let count = 1;
        let currentNode = this.head;
        let beforeNode = null;

        if (pos < 1 || pos > this.length || !this.length) {
            throw new Error('This position is outside the list!');

            return;
        }

        if (pos === 1) {
            this.head = currentNode.next;
            currentNode = null;
            this.length--;

            return;
        }

        while(count < pos) {
            beforeNode = currentNode;
            currentNode = currentNode.next;
            count++;
        }

        beforeNode.next = currentNode.next;
        currentNode = null;

        if (pos === this.length) {
            this.tail = beforeNode;
        }

        this.length--;
    }

    this.searchNode = (pos) => {
        let currentNode = this.head;
        let count = 1;

        if (pos < 1 || pos > this.length || !this.length) {
            throw new Error('This position is outside the list!');

            return;
        }

        while(count < pos) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
    }

    this.printList = () => {
        let node = this.head;

        while(node) {
            console.log(node.value);
            node = node.next;
        }
    }
}

//----- Examples

let myList = new list();

for (let i = 0; i < 10; i++) {
    myList.addNode(i);
}

myList.addNodeToHead('Hello World');
myList.addNodeToHead([1, 2, '3']);
myList.addNodeToHead({val: 'some'});
myList.addNodeToHead('one');
myList.removeNode(1);
myList.removeNode(12);

myList.searchNode(7).value = 'Three';

myList.printList();
console.log('length: ' + myList.length);
