function insertionSort(arr) {
    if (!Array.isArray(arr)) throw new Error("Input is not an array");
    else if (arr.length === 0 || arr.length === 1)
        throw new Error("Array too small");

    const array = [...arr];
    let history = [];

    for (let i = 1; i < array.length; i++) {
        let temp = array[i];
        let j = i - 1;

        history.push({
            array: [...array],
            stored: temp,
            index: i,
            insertionIndex: j,
        });

        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j--;

            history.push({
                array: [...array],
                stored: temp,
                index: i,
                insertionIndex: j,
            });
        }
        j++;
        array[j] = temp;

        history.push({
            array: [...array],
            stored: temp,
            index: i,
            insertionIndex: j,
        });
    }
    return history;
}

export default insertionSort;
