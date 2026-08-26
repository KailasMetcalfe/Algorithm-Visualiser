import binarySearch from "../../src/pages/binarySearch/binarySearchAlg.js";

describe("Check binarySearch invalid arguments", () => {
    it("Input not an array", () => {
        expect(() => binarySearch(12, 3)).toThrow(/array/i);
    });

    it("Input array too small", () => {
        expect(() => binarySearch([], 1)).toThrow(/small/i);
        expect(() => binarySearch([3], 5)).toThrow(/small/i);
    });

    it("Input array not sorted", () => {
        expect(() => binarySearch([7, 2, 9], 8)).toThrow(/sorted/i);
        expect(() => binarySearch([12, 8, 4, 2], 1)).toThrow(/ascending/i);
    });
});

describe("Check binarySearch valid arguments", () => {
    it("Match middle item immediately", () => {
        const history = [
            { found: false, leftP: 0, rightP: 2, middleP: 1 },
            { found: true, leftP: 0, rightP: 2, middleP: 1 },
        ];
        expect(binarySearch([1, 3, 5], 3)).toEqual(history);
    });

    it("Match item after few iterations", () => {
        const history = [
            { found: false, leftP: 0, rightP: 5, middleP: 2 },
            { found: false, leftP: 0, rightP: 1, middleP: 0 },
            { found: true, leftP: 0, rightP: 1, middleP: 0 },
        ];
        expect(binarySearch([1, 3, 5, 8, 12, 17], 1)).toEqual(history);
    });

    it("Match item in worst possible case", () => {
        const history = [
            { found: false, leftP: 0, rightP: 5, middleP: 2 },
            { found: false, leftP: 3, rightP: 5, middleP: 4 },
            { found: false, leftP: 3, rightP: 3, middleP: 3 },
            { found: true, leftP: 3, rightP: 3, middleP: 3 },
        ];
        expect(binarySearch([1, 3, 5, 8, 12, 17], 8)).toEqual(history);
    });

    it("Item not in array", () => {
        const history = [
            { found: false, leftP: 0, rightP: 4, middleP: 2 },
            { found: false, leftP: 3, rightP: 4, middleP: 3 },
            { found: false, leftP: 3, rightP: 2, middleP: 2 },
        ];
        expect(binarySearch([1, 3, 5, 8, 12], 6)).toEqual(history);
    });
});
