Describe how you could use a single array to implement three stacks.
class ThreeStacks {

    constructor(array) {
        this._data = array; // Store a reference to the (external) data array.
    }

    get capacity() {
        return ((this._data.length - 3) / 3) | 0;
    }

    size(stackNumber) {
        return this._data[stackNumber];
    }

    isEmpty(stackNumber) {
        return this.size(stackNumber) === 0;
    }

    isFull(stackNumber) {
        return this.size(stackNumber) === this.capacity;
    }

    indexOfTop(stackNumber) {
        return 3 + (this.capacity * stackNumber) + this.size(stackNumber) - 1;
    }

    push(stackNumber, value) {
        if (this.size(stackNumber) === this.capacity) {
            console.log(Stack number ${stackNumber} is full);
            return false
        }
        // Add the value to the list
        this._data[3 + (this.capacity * stackNumber) + this.size(stackNumber)] = value;
        // Add one to the respective stack count
        this._data[stackNumber]++;
        console.log(Item ${value} has been successfully added to stack ${stackNumber}`);
        return true;
    }``
`pop(stackNumber) {
        if (this.isEmpty(stackNumber)) {
            console.log('Stack number ${stackNumber} is empty');
            throw new Error('Cannot pop an empty stack.');
        }
        const topIndex = this.indexOfTop(stackNumber);
        const value = this._data[topIndex];
        this._data[topIndex] = 0; // Clear out element.
        this._data[stackNumber]--; // Reduce num elements in the stack
        return value;
    }

    peek(stackNumber) {
        if (this.isEmpty(stackNumber)) {
            console.log('Stack number ${stackNumber} is empty');
            throw new Error('Cannot peek an empty stack.');
        }
        const topIndex = this.indexOfTop(stackNumber);
        return this._data[topIndex];
    }

}
// Usage:
let array = new Array(10).fill(0);
console.log("raw data: ", array);

const stack = new ThreeStacks(array);
console.log("capacity: ", stack.capacity);
console.log("size(0): ", stack.size(0));
console.log("");

console.log("stack.push(0, 13)");
stack.push(0, 13);
console.log("size(0): ", stack.size(0));
console.log("peek(0): ", stack.peek(0));
console.log("");

console.log("stack.push(0, 37)");
stack.push(0, 37);
console.log("size(0): ", stack.size(0));
console.log("peek(0): ", stack.peek(0));
console.log("");

console.log("stack.pop(0)");
stack.pop(0);
console.log("size(0): ", stack.size(0));
console.log("peek(0): ", stack.peek(0));
console.log("");

console.log("stack.pop(0)");
stack.pop(0);
console.log("size(0): ", stack.size(0));
console.log("");

let v = 0;

for (s = 0; s < 3; s++) {
    while (!stack.isFull(s)) {
        stack.push(s, v);
        v++;
    }
    v += 10;
}
console.log("raw data: ", array);
java
`public class StackNode {
    int value;
    int prev;

    StackNode(int value, int prev) {
        this.value = value;
        this.prev = prev;
    }
}


public class StackMFromArray {
    private StackNode[] stackNodes = null;
    private static int CAPACITY = 10;
    private int freeListTop = 0;
    private int size = 0;
    private int[] stackPointers = {-1, -1, -1 };

    StackMFromArray() {
        stackNodes = new StackNode[CAPACITY];
        initFreeList();
    }

    private void initFreeList() {
        for (int i = 0; i < CAPACITY; i++) {
            stackNodes[i] = new StackNode(0, i + 1);
        }
    }

    public void push(int stackNum, int value) throws Exception {
        int freeIndex;
        int currentStackTop = stackPointers[stackNum - 1];
        freeIndex = getFreeNodeIndex();
        StackNode n = stackNodes[freeIndex];
        n.prev = currentStackTop;
        n.value = value;
        stackPointers[stackNum - 1] = freeIndex;
    }

    public StackNode pop(int stackNum) throws Exception {
        int currentStackTop = stackPointers[stackNum - 1];
        if (currentStackTop == -1) {
            throw new Exception("UNDERFLOW");
        }

        StackNode temp = stackNodes[currentStackTop];
        stackPointers[stackNum - 1] = temp.prev;
        freeStackNode(currentStackTop);
        return temp;
    }``
` private int getFreeNodeIndex() throws Exception {
        int temp = freeListTop;

        if (size >= CAPACITY)
            throw new Exception("OVERFLOW");

        freeListTop = stackNodes[temp].prev;
        size++;
        return temp;
    }

    private void freeStackNode(int index) {
        stackNodes[index].prev = freeListTop;
        freeListTop = index;
        size--;
    }

    public static void main(String args[]) {
        // Test Driver
        StackMFromArray mulStack = new StackMFromArray();
        try {
            mulStack.push(1, 11);
            mulStack.push(1, 12);
            mulStack.push(2, 21);
            mulStack.push(3, 31);
            mulStack.push(3, 32);
            mulStack.push(2, 22);
            mulStack.push(1, 13);
            StackNode node = mulStack.pop(1);
            node = mulStack.pop(1);
            System.out.println(node.value);
            mulStack.push(1, 13);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}``