import heapSort from "../../src/pages/heapSort/heapSortAlg.js";

describe("Check heapSort invalid arguments", () => {
    it("Input not an array", () => {
        expect(() => heapSort(12)).toThrow(/array/i);
    });

    it("Input array too small", () => {
        expect(() => heapSort([])).toThrow(/small/i);
        expect(() => heapSort([81])).toThrow(/small/i);
    });
});

describe("Check heapSort valid arguments", () => {
    it("Sort array of 3 items", () => {
        const history = [
            // Construct heap
            { array: [2, 12, 8], heapSize: 3, current: undefined, swapping: undefined },

            { array: [2, 12, 8], heapSize: 3, current: 2, swapping: undefined },
            { array: [2, 12, 8], heapSize: 3, current: 1, swapping: undefined },
            { array: [2, 12, 8], heapSize: 3, current: 0, swapping: undefined },
            { array: [2, 12, 8], heapSize: 3, current: 0, swapping: 1 },
            { array: [12, 2, 8], heapSize: 3, current: 1, swapping: undefined },

            { array: [12, 2, 8], heapSize: 3, current: undefined, swapping: undefined },

            // Sort
            { array: [12, 2, 8], heapSize: 3, current: 0, swapping: 2 },
            { array: [8, 2, 12], heapSize: 2, current: 0, swapping: undefined },

            { array: [8, 2, 12], heapSize: 2, current: 0, swapping: 1 },
            { array: [2, 8, 12], heapSize: 1, current: 0, swapping: undefined },

            { array: [2, 8, 12], heapSize: 1, current: 0, swapping: 0 },
            { array: [2, 8, 12], heapSize: 0, current: 0, swapping: undefined },
        ];
        expect(heapSort([2, 12, 8])).toEqual(history);
    });

    it("Sort array of 5 items", () => {
        const history = [
            // Construct heap
            {
                array: [18, 3, 42, 27, 6],
                heapSize: 5,
                current: undefined,
                swapping: undefined,
            },

            { array: [18, 3, 42, 27, 6], heapSize: 5, current: 4, swapping: undefined },
            { array: [18, 3, 42, 27, 6], heapSize: 5, current: 3, swapping: undefined },
            { array: [18, 3, 42, 27, 6], heapSize: 5, current: 2, swapping: undefined },
            { array: [18, 3, 42, 27, 6], heapSize: 5, current: 1, swapping: undefined },
            { array: [18, 3, 42, 27, 6], heapSize: 5, current: 1, swapping: 3 },
            { array: [18, 27, 42, 3, 6], heapSize: 5, current: 3, swapping: undefined },
            { array: [18, 27, 42, 3, 6], heapSize: 5, current: 0, swapping: undefined },
            { array: [18, 27, 42, 3, 6], heapSize: 5, current: 0, swapping: 2 },
            { array: [42, 27, 18, 3, 6], heapSize: 5, current: 2, swapping: undefined },

            {
                array: [42, 27, 18, 3, 6],
                heapSize: 5,
                current: undefined,
                swapping: undefined,
            },

            // Sort
            { array: [42, 27, 18, 3, 6], heapSize: 5, current: 0, swapping: 4 },
            { array: [6, 27, 18, 3, 42], heapSize: 4, current: 0, swapping: undefined },
            { array: [6, 27, 18, 3, 42], heapSize: 4, current: 0, swapping: 1 },
            { array: [27, 6, 18, 3, 42], heapSize: 4, current: 1, swapping: undefined },

            { array: [27, 6, 18, 3, 42], heapSize: 4, current: 0, swapping: 3 },
            { array: [3, 6, 18, 27, 42], heapSize: 3, current: 0, swapping: undefined },
            { array: [3, 6, 18, 27, 42], heapSize: 3, current: 0, swapping: 2 },
            { array: [18, 6, 3, 27, 42], heapSize: 3, current: 2, swapping: undefined },

            { array: [18, 6, 3, 27, 42], heapSize: 3, current: 0, swapping: 2 },
            { array: [3, 6, 18, 27, 42], heapSize: 2, current: 0, swapping: undefined },
            { array: [3, 6, 18, 27, 42], heapSize: 2, current: 0, swapping: 1 },
            { array: [6, 3, 18, 27, 42], heapSize: 2, current: 1, swapping: undefined },

            { array: [6, 3, 18, 27, 42], heapSize: 2, current: 0, swapping: 1 },
            { array: [3, 6, 18, 27, 42], heapSize: 1, current: 0, swapping: undefined },

            { array: [3, 6, 18, 27, 42], heapSize: 1, current: 0, swapping: 0 },
            { array: [3, 6, 18, 27, 42], heapSize: 0, current: 0, swapping: undefined },
        ];
        expect(heapSort([18, 3, 42, 27, 6])).toEqual(history);
    });

    it("Array already sorted in ascending order", () => {
        const history = [
            // Construct heap
            { array: [4, 11, 26], heapSize: 3, current: undefined, swapping: undefined },

            { array: [4, 11, 26], heapSize: 3, current: 2, swapping: undefined },
            { array: [4, 11, 26], heapSize: 3, current: 1, swapping: undefined },
            { array: [4, 11, 26], heapSize: 3, current: 0, swapping: undefined },
            { array: [4, 11, 26], heapSize: 3, current: 0, swapping: 2 },
            { array: [26, 11, 4], heapSize: 3, current: 2, swapping: undefined },

            { array: [26, 11, 4], heapSize: 3, current: undefined, swapping: undefined },

            // Sort
            { array: [26, 11, 4], heapSize: 3, current: 0, swapping: 2 },
            { array: [4, 11, 26], heapSize: 2, current: 0, swapping: undefined },
            { array: [4, 11, 26], heapSize: 2, current: 0, swapping: 1 },
            { array: [11, 4, 26], heapSize: 2, current: 1, swapping: undefined },

            { array: [11, 4, 26], heapSize: 2, current: 0, swapping: 1 },
            { array: [4, 11, 26], heapSize: 1, current: 0, swapping: undefined },

            { array: [4, 11, 26], heapSize: 1, current: 0, swapping: 0 },
            { array: [4, 11, 26], heapSize: 0, current: 0, swapping: undefined },
        ];
        expect(heapSort([4, 11, 26])).toEqual(history);
    });

    it("Sort array from descending order", () => {
        const history = [
            { array: [34, 21, 8], heapSize: 3, current: undefined, swapping: undefined },

            { array: [34, 21, 8], heapSize: 3, current: 2, swapping: undefined },
            { array: [34, 21, 8], heapSize: 3, current: 1, swapping: undefined },
            { array: [34, 21, 8], heapSize: 3, current: 0, swapping: undefined },

            { array: [34, 21, 8], heapSize: 3, current: undefined, swapping: undefined },

            // Sort
            { array: [34, 21, 8], heapSize: 3, current: 0, swapping: 2 },
            { array: [8, 21, 34], heapSize: 2, current: 0, swapping: undefined },
            { array: [8, 21, 34], heapSize: 2, current: 0, swapping: 1 },
            { array: [21, 8, 34], heapSize: 2, current: 1, swapping: undefined },

            { array: [21, 8, 34], heapSize: 2, current: 0, swapping: 1 },
            { array: [8, 21, 34], heapSize: 1, current: 0, swapping: undefined },

            { array: [8, 21, 34], heapSize: 1, current: 0, swapping: 0 },
            { array: [8, 21, 34], heapSize: 0, current: 0, swapping: undefined },
        ];
        expect(heapSort([34, 21, 8])).toEqual(history);
    });
});
