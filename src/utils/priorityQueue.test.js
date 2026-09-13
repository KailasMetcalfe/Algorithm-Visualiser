import { expect, it } from "vitest";
import PriorityQueue from "./PriorityQueue.js";

describe("Test PriorityQueue", () => {
    it("Check enqueuing & dequeuing", () => {
        const pq = new PriorityQueue();

        pq.enqueue({ value: "A", priority: 2 });
        pq.enqueue({ value: 31, priority: 4 });

        expect(pq.dequeue()).toEqual("A");

        pq.enqueue({ value: "B", priority: 1 });
        pq.enqueue({ value: ["cat", "dog"], priority: 1 });

        expect(pq.dequeue()).toEqual("B");
        expect(pq.dequeue()).toEqual(["cat", "dog"]);
        expect(pq.dequeue()).toEqual(31);
        expect(pq.dequeue()).toBeNull();
    });

    it("Check peeking", () => {
        const pq = new PriorityQueue();
        pq.enqueue({ value: 12, priority: 13 });
        pq.enqueue({ value: "orange", priority: 5 });

        expect(pq.peek()).toBe("orange");
        pq.dequeue();
        expect(pq.peek()).toBe(12);
    });

    it("Check updating priority", () => {
        const pq = new PriorityQueue();
        pq.enqueue({ value: 11.2, priority: 4 });
        pq.enqueue({ value: "blue", priority: 7 });
        pq.enqueue({ value: 51, priority: 2 });

        expect(pq.peek()).toBe(51);
        pq.updatePriority("blue", 1);
        expect(pq.peek()).toBe("blue");
        pq.updatePriority(11.2, 0);
        expect(pq.peek()).toBe(11.2);

        pq.updatePriority(11.2, 5);
        expect(pq.peek()).toBe("blue");
    });
});
