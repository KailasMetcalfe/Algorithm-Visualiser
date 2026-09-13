// Implemented via a binary heap tree (Min)

class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    #parent(index) {
        return Math.floor((index - 1) / 2);
    }
    #leftChild(index) {
        return 2 * index + 1;
    }
    #rightChild(index) {
        return 2 * index + 2;
    }

    enqueue({ value, priority }) {
        this.heap.push({ value, priority });
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index) {
        while (index > 0) {
            // Lower priority = higher up the tree (array)
            if (
                this.heap[this.#parent(index)].priority >
                this.heap[index].priority
            ) {
                this.#swap(this.#parent(index), index);
                index = this.#parent(index);
            } else break;
        }
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const root = this.heap[0];
        this.#swap(0, this.heap.length - 1);
        this.heap.pop();
        this.heapifyDown(0);

        return root.value;
    }

    heapifyDown(index) {
        const size = this.heap.length;
        let curr = index;
        let stop = false;

        while (!stop) {
            const left = this.#leftChild(curr);
            const right = this.#rightChild(curr);
            let smallest = curr;

            if (
                left < size &&
                this.heap[left].priority < this.heap[smallest].priority
            ) {
                smallest = left;
            }

            if (
                right < size &&
                this.heap[right].priority < this.heap[smallest].priority
            ) {
                smallest = right;
            }

            if (smallest !== curr) {
                this.#swap(curr, smallest);
                curr = smallest;
            } else {
                stop = true;
            }
        }
    }

    #swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [
            this.heap[index2],
            this.heap[index1],
        ];
    }

    peek() {
        return this.heap[0].value || null;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    updatePriority(value, priority) {
        for (let i = 0; i < this.heap.length; i++) {
            const node = this.heap[i];
            if (node.value === value) {
                const oldPriority = node.priority;
                node.priority = priority;
                oldPriority > priority
                    ? this.heapifyUp(i)
                    : this.heapifyDown(i);
                break;
            }
        }
    }

    snapshot() {
        return [...this.heap]
            .sort((x, y) => {
                // handles case of Infinity - Infinity = NaN
                if (x.priority === y.priority)
                    return Number(x.value) - Number(y.value);
                return x.priority - y.priority;
            })
            .map((item) => item.value);
    }
}

export default PriorityQueue;
