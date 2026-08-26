import insertionSort from "../../src/pages/insertionSort/insertionSortAlg.js";

describe("Check insertionSort invalid arguments", () => {
    it("Input not an array", () => {
        expect(() => insertionSort(12)).toThrow(/array/i);
    });

    it("Input array too small", () => {
        expect(() => insertionSort([])).toThrow(/small/i);
        expect(() => insertionSort([81])).toThrow(/small/i);
    });
});

describe("Check insertionSort valid arguments", () => {
    it("Sort array of 2 items", () => {
        const history = [
            { array: [15, 6], stored: 6, index: 1, insertionIndex: 0 },
            { array: [15, 15], stored: 6, index: 1, insertionIndex: -1 },
            { array: [6, 15], stored: 6, index: 1, insertionIndex: 0 },
        ];
        expect(insertionSort([15, 6])).toEqual(history);
    });

    it("Sort array of 3 items", () => {
        const history = [
            { array: [15, 2, 9], stored: 2, index: 1, insertionIndex: 0 },
            { array: [15, 15, 9], stored: 2, index: 1, insertionIndex: -1 },
            { array: [2, 15, 9], stored: 2, index: 1, insertionIndex: 0 },
            { array: [2, 15, 9], stored: 9, index: 2, insertionIndex: 1 },
            { array: [2, 15, 15], stored: 9, index: 2, insertionIndex: 0 },
            { array: [2, 9, 15], stored: 9, index: 2, insertionIndex: 1 },
        ];
        expect(insertionSort([15, 2, 9])).toEqual(history);
    });

    it("Sort array of 4 items", () => {
        const history = [
            { array: [19, 2, 35, 8], stored: 2, index: 1, insertionIndex: 0 },
            { array: [19, 19, 35, 8], stored: 2, index: 1, insertionIndex: -1 },
            { array: [2, 19, 35, 8], stored: 2, index: 1, insertionIndex: 0 },
            { array: [2, 19, 35, 8], stored: 35, index: 2, insertionIndex: 1 },
            { array: [2, 19, 35, 8], stored: 35, index: 2, insertionIndex: 2 },
            { array: [2, 19, 35, 8], stored: 8, index: 3, insertionIndex: 2 },
            { array: [2, 19, 35, 35], stored: 8, index: 3, insertionIndex: 1 },
            { array: [2, 19, 19, 35], stored: 8, index: 3, insertionIndex: 0 },
            { array: [2, 8, 19, 35], stored: 8, index: 3, insertionIndex: 1 },
        ];
        expect(insertionSort([19, 2, 35, 8])).toEqual(history);
    });

    it("Array already sorted in ascending order", () => {
        const history = [
            { array: [1, 8, 9], stored: 8, index: 1, insertionIndex: 0 },
            { array: [1, 8, 9], stored: 8, index: 1, insertionIndex: 1 },
            { array: [1, 8, 9], stored: 9, index: 2, insertionIndex: 1 },
            { array: [1, 8, 9], stored: 9, index: 2, insertionIndex: 2 },
        ];
        expect(insertionSort([1, 8, 9])).toEqual(history);
    });

    it("Sort array from descending order", () => {
        const history = [
            { array: [34, 21, 8], stored: 21, index: 1, insertionIndex: 0 },
            { array: [34, 34, 8], stored: 21, index: 1, insertionIndex: -1 },
            { array: [21, 34, 8], stored: 21, index: 1, insertionIndex: 0 },
            { array: [21, 34, 8], stored: 8, index: 2, insertionIndex: 1 },
            { array: [21, 34, 34], stored: 8, index: 2, insertionIndex: 0 },
            { array: [21, 21, 34], stored: 8, index: 2, insertionIndex: -1 },
            { array: [8, 21, 34], stored: 8, index: 2, insertionIndex: 0 },
        ];
        expect(insertionSort([34, 21, 8])).toEqual(history);
    });
});
