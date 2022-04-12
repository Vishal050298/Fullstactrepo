
class StCLS<T> {
    private elements: T[] = [];
    
    constructor(private size: number) {
    }
    isEmpty(): boolean {
        return this.elements.length === 0;
    }
    isFull(): boolean {
        return this.elements.length === this.size;
    }
    push(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);

    }
    pop(): T {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    }
}

// **StCLS with num.
let num = new StCLS<number>(5);

function randBetween(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

while (!num.isFull()) {
    let n = randBetween(1, 10);
    console.log(`Push ${n} into the stack.`)
    num.push(n);
}

while (!num.isEmpty()) {
    let n = num.pop();
    console.log(`Pop ${n} from the stack.`);
}


//** StCLS wth string */
let words = 'The quick brown fox jumps over the lazy dog'.split(' ');

let wordStack = new StCLS<string>(words.length);

// push words into the stack
words.forEach(word => wordStack.push(word));

// pop words from the stack
while (!wordStack.isEmpty()) {
    console.log(wordStack.pop());
}