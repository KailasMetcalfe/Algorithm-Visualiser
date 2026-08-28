function mergeSort(arr) {
    if (!Array.isArray(arr)) throw new Error("Input is not an array");
    else if (arr.length === 0 || arr.length === 1)
        throw new Error("Array too small");
    const array = [...arr];

    const history = [];
    for (let pairs = 1; pairs < array.length; pairs *= 2) {
        const subArraySize = pairs * 2;
        for (let left = 0; left < array.length - 1; left += subArraySize) {
            const right = Math.min(left + subArraySize - 1, array.length - 1);
            // Need to define mid based on where 'right' would be should it exceed the array
            // rather than where it actually may be in relation to right
            const mid = Math.min(left + pairs - 1, array.length - 1);
            history.push({
                array: [...array],
                left: left,
                right: right,
                merge: false,
            });
            merge(array, left, mid, right, history);
        }
    }
    return history;
}

// Mutates argument array
function merge(array, left, mid, right, history = []) {
    const leftArray = array.slice(left, mid + 1);
    const rightArray = array.slice(mid + 1, right + 1);

    let leftArrayP = 0,
        rightArrayP = 0,
        mainP = left;

    history.push({
        array: [...array],
        left: leftArrayP,
        right: rightArrayP,
        merge: true,
        leftArray: leftArray,
        rightArray: rightArray,
        main: mainP,
    });

    while (leftArrayP < leftArray.length && rightArrayP < rightArray.length) {
        array[mainP++] =
            leftArray[leftArrayP] <= rightArray[rightArrayP]
                ? leftArray[leftArrayP++]
                : rightArray[rightArrayP++];

        history.push({
            array: [...array],
            left: leftArrayP,
            right: rightArrayP,
            merge: true,
            leftArray: leftArray,
            rightArray: rightArray,
            main: mainP,
        });
    }

    // Add remaining items in list (only one will run)
    while (leftArrayP < leftArray.length) {
        array[mainP++] = leftArray[leftArrayP++];
        history.push({
            array: [...array],
            left: leftArrayP,
            right: rightArrayP,
            merge: true,
            leftArray: leftArray,
            rightArray: rightArray,
            main: mainP,
        });
    }

    while (rightArrayP < rightArray.length) {
        array[mainP++] = rightArray[rightArrayP++];
        history.push({
            array: [...array],
            left: leftArrayP,
            right: rightArrayP,
            merge: true,
            leftArray: leftArray,
            rightArray: rightArray,
            main: mainP,
        });
    }
}

export default mergeSort;
