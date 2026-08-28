const javascript = `function mergeSort(arr) {
    // ErrorCheck ....

    // Copy to not mutate original array
    const array = [...arr];

    for (let pairs = 1; pairs < array.length; pairs *= 2) {
        const subArraySize = pairs * 2;

        for (let left = 0; left < array.length - 1; left += subArraySize) {
            const right = Math.min(left + subArraySize - 1, array.length - 1);
            // Need to define mid based on where 'right' would be should it exceed the array
            // rather than where it actually may be in relation to right
            const mid = Math.min(left + pairs - 1, array.length - 1);
            merge(array, left, mid, right);
        }
    }
    return array;
}

// DOES mutate argument array
function merge(array, left, mid, right) {
    const leftArray = array.slice(left, mid + 1);
    const rightArray = array.slice(mid + 1, right + 1);

    let leftArrayP = 0,
        rightArrayP = 0,
        mainP = left;

    while (leftArrayP < leftArray.length && rightArrayP < rightArray.length) {
        array[mainP++] =
            leftArray[leftArrayP] <= rightArray[rightArrayP]
                ? leftArray[leftArrayP++]
                : rightArray[rightArrayP++];
    }

    // Add remaining items in list (only one will run)
    while (leftArrayP < leftArray.length) {
        array[mainP++] = leftArray[leftArrayP++];
    }

    while (rightArrayP < rightArray.length) {
        array[mainP++] = rightArray[rightArrayP++];
    }
}`;

const python = `def mergeSort(arr):
    # ErrorCheck ....

    # Copy to not mutate original array
    array = arr.copy()
    pairs = 1
    while pairs < len(array):
        subArraySize = pairs * 2
        left = 0

        while left < (len(array) - 1):
            right = min(left + subArraySize - 1, len(array) - 1)
            # Need to define mid based on where 'right' would be should it exceed the array
            # rather than where it actually may be in relation to right
            mid = min(left + pairs - 1, len(array) - 1)
            merge(array, left, mid, right)
            
            left += subArraySize
            
        pairs *= 2
        
    return array

# DOES mutate argument array
def merge(array, left, mid, right):
    leftArray = array[left: mid + 1]
    rightArray = array[mid + 1: right + 1]
    leftArrayP = 0
    rightArrayP = 0
    mainP = left

    while (leftArrayP < len(leftArray)) and (rightArrayP < len(rightArray)):
        leftValue = leftArray[leftArrayP]
        rightValue =rightArray[rightArrayP]

        if (leftValue <= rightValue):
            array[mainP] = leftValue
            leftArrayP += 1
        else:
            array[mainP] = rightValue
            rightArrayP += 1
            
        mainP += 1
    
    # Add remaining items in list (only one will run)
    while leftArrayP < len(leftArray):
        array[mainP] = leftArray[leftArrayP]
        leftArrayP += 1
        mainP += 1
    
    while rightArrayP < len(rightArray):
        array[mainP] = rightArray[rightArrayP]
        rightArrayP += 1
        mainP += 1`;

const java = `import java.util.Arrays;
class MergeSort {
    public static int[] mergeSort(int[] arr) {
        // ErrorCheck ....

        // Copy to not mutate original array
        int[] array = arr.clone();

        for (int pairs = 1; pairs < array.length; pairs *= 2) {
           int subArraySize = pairs * 2;

            for (int left = 0; left < array.length - 1; left += subArraySize) {
                int right = Math.min(left + subArraySize - 1, array.length - 1);
                // Need to define mid based on where 'right' would be should it exceed the array
                // rather than where it actually may be in relation to right
                int mid = Math.min(left + pairs - 1, array.length - 1);
                merge(array, left, mid, right);
            }
        }
        return array;
    }

    // DOES mutate argument array
    private static void merge(int[] array, int left, int mid, int right) {
        int[] leftArray = Arrays.copyOfRange(array, left, mid + 1);
        int[] rightArray = Arrays.copyOfRange(array, mid + 1, right + 1);

        int leftArrayP = 0, rightArrayP = 0, mainP = left;

        while (leftArrayP < leftArray.length && rightArrayP < rightArray.length) {
            array[mainP++] =
                leftArray[leftArrayP] <= rightArray[rightArrayP]
                    ? leftArray[leftArrayP++]
                    : rightArray[rightArrayP++];
        }

        // Add remaining items in list (only one will run)
        while (leftArrayP < leftArray.length) {
            array[mainP++] = leftArray[leftArrayP++];
        }

        while (rightArrayP < rightArray.length) {
            array[mainP++] = rightArray[rightArrayP++];
        }
    }
}`;
export default [
    { language: "javascript", code: javascript },
    { language: "python", code: python },
    { language: "java", code: java },
];
