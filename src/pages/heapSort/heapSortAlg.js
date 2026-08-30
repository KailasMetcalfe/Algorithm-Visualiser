function heapSort(arr) {
    if (!Array.isArray(arr)) throw new Error("Input is not an array");
    else if (arr.length === 0 || arr.length === 1)
        throw new Error("Array too small");

    let array = [...arr];
    let history = [];
    history.push({
        array: [...array],
        heapSize: array.length,
        current: undefined,
        swapping: undefined,
    });
    // Create initial heap
    for (let i = array.length - 1; i >= 0; i--) {
        heapify(array, array.length, i, history);
    }

    history.push({
        array: [...array],
        heapSize: array.length,
        current: undefined,
        swapping: undefined,
    });

    // Sort
    for (let i = array.length - 1; i >= 0; i--) {
        history.push({
            array: [...array],
            heapSize: i + 1,
            current: 0,
            swapping: i,
        });
        // Swap root and i
        [array[0], array[i]] = [array[i], array[0]];
        heapify(array, i, 0, history);
    }

    return history;
}

// Mutates argument array
function heapify(array, heapSize, index, history = []) {
    const leftChild = (i) => 2 * i + 1;
    const rightChild = (i) => 2 * i + 2;

    let curr = index;
    let stop = false;

    while (!stop) {
        history.push({
            array: [...array],
            heapSize: heapSize,
            current: curr,
            swapping: undefined,
        });
        const leftIndex = leftChild(curr);
        const rightIndex = rightChild(curr);
        let largest = curr;

        if (leftIndex < heapSize && array[leftIndex] > array[largest]) {
            largest = leftIndex;
        }

        if (rightIndex < heapSize && array[rightIndex] > array[largest]) {
            largest = rightIndex;
        }

        if (largest !== curr) {
            history.push({
                array: [...array],
                heapSize: heapSize,
                current: curr,
                swapping: largest,
            });

            [array[curr], array[largest]] = [array[largest], array[curr]];
            curr = largest;
        } else {
            stop = true;
        }
    }
}

export default heapSort;
