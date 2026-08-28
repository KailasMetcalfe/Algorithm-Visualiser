import mergeSort from "../../src/pages/mergeSort/mergeSortAlg.js";

describe("Check mergeSort invalid arguments", () => {
    it("Input not an array", () => {
        expect(() => mergeSort(19)).toThrow(/array/i);
    });

    it("Input array too small", () => {
        expect(() => mergeSort([])).toThrow(/small/i);
        expect(() => mergeSort([2])).toThrow(/small/i);
    });
});

describe("Check mergeSort valid arguments", () => {
    it("Sort array of 4 items", () => {
        const history = [
            { array: [65, 24, 32, 8], left: 0, right: 1, merge: false },
            {
                array: [65, 24, 32, 8],
                left: 0,
                right: 0,
                merge: true,
                leftArray: [65],
                rightArray: [24],
                main: 0,
            },
            {
                array: [24, 24, 32, 8],
                left: 0,
                right: 1,
                merge: true,
                leftArray: [65],
                rightArray: [24],
                main: 1,
            },
            {
                array: [24, 65, 32, 8],
                left: 1,
                right: 1,
                merge: true,
                leftArray: [65],
                rightArray: [24],
                main: 2,
            },

            { array: [24, 65, 32, 8], left: 2, right: 3, merge: false },
            {
                array: [24, 65, 32, 8],
                left: 0,
                right: 0,
                merge: true,
                leftArray: [32],
                rightArray: [8],
                main: 2,
            },
            {
                array: [24, 65, 8, 8],
                left: 0,
                right: 1,
                merge: true,
                leftArray: [32],
                rightArray: [8],
                main: 3,
            },
            {
                array: [24, 65, 8, 32],
                left: 1,
                right: 1,
                merge: true,
                leftArray: [32],
                rightArray: [8],
                main: 4,
            },

            { array: [24, 65, 8, 32], left: 0, right: 3, merge: false },
            {
                array: [24, 65, 8, 32],
                left: 0,
                right: 0,
                merge: true,
                leftArray: [24, 65],
                rightArray: [8, 32],
                main: 0,
            },
            {
                array: [8, 65, 8, 32],
                left: 0,
                right: 1,
                merge: true,
                leftArray: [24, 65],
                rightArray: [8, 32],
                main: 1,
            },
            {
                array: [8, 24, 8, 32],
                left: 1,
                right: 1,
                merge: true,
                leftArray: [24, 65],
                rightArray: [8, 32],
                main: 2,
            },
            {
                array: [8, 24, 32, 32],
                left: 1,
                right: 2,
                merge: true,
                leftArray: [24, 65],
                rightArray: [8, 32],
                main: 3,
            },
            {
                array: [8, 24, 32, 65],
                left: 2,
                right: 2,
                merge: true,
                leftArray: [24, 65],
                rightArray: [8, 32],
                main: 4,
            },
        ];
        expect(mergeSort([65, 24, 32, 8])).toEqual(history);
    });

    it("Sort array of 5 items", () => {
        const history = [
            { array: [4, 15, 27, 9, 21], left: 0, right: 1, merge: false },
            {
                array: [4, 15, 27, 9, 21],
                left: 0,
                right: 0,
                merge: true,
                leftArray: [4],
                rightArray: [15],
                main: 0,
            },
            {
                array: [4, 15, 27, 9, 21],
                left: 1,
                right: 0,
                merge: true,
                leftArray: [4],
                rightArray: [15],
                main: 1,
            },
            {
                array: [4, 15, 27, 9, 21],
                left: 1,
                right: 1,
                merge: true,
                leftArray: [4],
                rightArray: [15],
                main: 2,
            },

            { array: [4, 15, 27, 9, 21], left: 2, right: 3, merge: false },
            {
                array: [4, 15, 27, 9, 21],
                left: 0,
                right: 0,
                merge: true,
                leftArray: [27],
                rightArray: [9],
                main: 2,
            },
            {
                array: [4, 15, 9, 9, 21],
                left: 0,
                right: 1,
                merge: true,
                leftArray: [27],
                rightArray: [9],
                main: 3,
            },
            {
                array: [4, 15, 9, 27, 21],
                left: 1,
                right: 1,
                merge: true,
                leftArray: [27],
                rightArray: [9],
                main: 4,
            },

            { array: [4, 15, 9, 27, 21], left: 0, right: 3, merge: false },
            {
                array: [4, 15, 9, 27, 21],
                left: 0,
                right: 0,
                merge: true,
                leftArray: [4, 15],
                rightArray: [9, 27],
                main: 0,
            },
            {
                array: [4, 15, 9, 27, 21],
                left: 1,
                right: 0,
                merge: true,
                leftArray: [4, 15],
                rightArray: [9, 27],
                main: 1,
            },
            {
                array: [4, 9, 9, 27, 21],
                left: 1,
                right: 1,
                merge: true,
                leftArray: [4, 15],
                rightArray: [9, 27],
                main: 2,
            },
            {
                array: [4, 9, 15, 27, 21],
                left: 2,
                right: 1,
                merge: true,
                leftArray: [4, 15],
                rightArray: [9, 27],
                main: 3,
            },
            {
                array: [4, 9, 15, 27, 21],
                left: 2,
                right: 2,
                merge: true,
                leftArray: [4, 15],
                rightArray: [9, 27],
                main: 4,
            },

            { array: [4, 9, 15, 27, 21], left: 0, right: 4, merge: false },
            {
                array: [4, 9, 15, 27, 21],
                left: 0,
                right: 0,
                merge: true,
                leftArray: [4, 9, 15, 27],
                rightArray: [21],
                main: 0,
            },
            {
                array: [4, 9, 15, 27, 21],
                left: 1,
                right: 0,
                merge: true,
                leftArray: [4, 9, 15, 27],
                rightArray: [21],
                main: 1,
            },
            {
                array: [4, 9, 15, 27, 21],
                left: 2,
                right: 0,
                merge: true,
                leftArray: [4, 9, 15, 27],
                rightArray: [21],
                main: 2,
            },
            {
                array: [4, 9, 15, 27, 21],
                left: 3,
                right: 0,
                merge: true,
                leftArray: [4, 9, 15, 27],
                rightArray: [21],
                main: 3,
            },
            {
                array: [4, 9, 15, 21, 21],
                left: 3,
                right: 1,
                merge: true,
                leftArray: [4, 9, 15, 27],
                rightArray: [21],
                main: 4,
            },
            {
                array: [4, 9, 15, 21, 27],
                left: 4,
                right: 1,
                merge: true,
                leftArray: [4, 9, 15, 27],
                rightArray: [21],
                main: 5,
            },
        ];
        expect(mergeSort([4, 15, 27, 9, 21])).toEqual(history);
    });

    it("Array already sorted in ascending order", () => {
        const history = [
            { array: [0, 16, 34], left: 0, right: 1, merge: false },
            {
                array: [0, 16, 34],
                left: 0,
                right: 0,
                merge: true,
                leftArray: [0],
                rightArray: [16],
                main: 0,
            },
            {
                array: [0, 16, 34],
                left: 1,
                right: 0,
                merge: true,
                leftArray: [0],
                rightArray: [16],
                main: 1,
            },
            {
                array: [0, 16, 34],
                left: 1,
                right: 1,
                merge: true,
                leftArray: [0],
                rightArray: [16],
                main: 2,
            },

            { array: [0, 16, 34], left: 0, right: 2, merge: false },
            {
                array: [0, 16, 34],
                left: 0,
                right: 0,
                merge: true,
                leftArray: [0, 16],
                rightArray: [34],
                main: 0,
            },
            {
                array: [0, 16, 34],
                left: 1,
                right: 0,
                merge: true,
                leftArray: [0, 16],
                rightArray: [34],
                main: 1,
            },
            {
                array: [0, 16, 34],
                left: 2,
                right: 0,
                merge: true,
                leftArray: [0, 16],
                rightArray: [34],
                main: 2,
            },
            {
                array: [0, 16, 34],
                left: 2,
                right: 1,
                merge: true,
                leftArray: [0, 16],
                rightArray: [34],
                main: 3,
            },
        ];
        expect(mergeSort([0, 16, 34])).toEqual(history);
    });

    it("Sort array from descending order", () => {
        const history = [
            { array: [34, 21, 8], left: 0, right: 1, merge: false },
            {
                array: [34, 21, 8],
                left: 0,
                right: 0,
                merge: true,
                leftArray: [34],
                rightArray: [21],
                main: 0,
            },
            {
                array: [21, 21, 8],
                left: 0,
                right: 1,
                merge: true,
                leftArray: [34],
                rightArray: [21],
                main: 1,
            },
            {
                array: [21, 34, 8],
                left: 1,
                right: 1,
                merge: true,
                leftArray: [34],
                rightArray: [21],
                main: 2,
            },

            { array: [21, 34, 8], left: 0, right: 2, merge: false },
            {
                array: [21, 34, 8],
                left: 0,
                right: 0,
                merge: true,
                leftArray: [21, 34],
                rightArray: [8],
                main: 0,
            },
            {
                array: [8, 34, 8],
                left: 0,
                right: 1,
                merge: true,
                leftArray: [21, 34],
                rightArray: [8],
                main: 1,
            },
            {
                array: [8, 21, 8],
                left: 1,
                right: 1,
                merge: true,
                leftArray: [21, 34],
                rightArray: [8],
                main: 2,
            },
            {
                array: [8, 21, 34],
                left: 2,
                right: 1,
                merge: true,
                leftArray: [21, 34],
                rightArray: [8],
                main: 3,
            },
        ];
        expect(mergeSort([34, 21, 8])).toEqual(history);
    });
});
