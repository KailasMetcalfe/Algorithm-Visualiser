function binarySearch(arr, item) {
    if (!Array.isArray(arr)) throw new Error("Input is not an array");
    else if (arr.length === 0 || arr.length === 1)
        throw new Error("Array too small");
    else if (!arr.every((elem, i, array) => i == 0 || elem >= array[i - 1]))
        throw new Error("Array not sorted in ascending order");

    let history = [];
    let found = false;
    let leftP = 0;
    let rightP = arr.length - 1;
    let middleP = Math.floor((leftP + rightP) / 2);

    history.push({ found, leftP, rightP, middleP }); // Save snapshot

    while (!found && leftP <= rightP) {
        if (arr[middleP] === item) found = true;
        else {
            if (arr[middleP] > item) rightP = middleP - 1;
            else leftP = middleP + 1;

            middleP = Math.floor((leftP + rightP) / 2);
        }
        history.push({ found, leftP, rightP, middleP });
    }
    return history;
}

export default binarySearch;
