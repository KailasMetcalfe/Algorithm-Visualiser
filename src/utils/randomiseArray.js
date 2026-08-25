function randomArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
    return array;
}

// returns random array in ascending order with no duplicates
function randomSortedArray(size) {
    const set = new Set();
    while (set.size < size) {
        set.add(Math.floor(Math.random() * 100));
    }

    return Array.from(set).sort((a, b) => a - b);
}

export { randomArray, randomSortedArray };
