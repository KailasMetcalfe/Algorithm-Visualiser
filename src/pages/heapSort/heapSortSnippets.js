const js = `function heapSort(arr) {
    // ErrorCheck ....

    // New copy to not mutate original array
    let array = [...arr];
    
    // Create initial heap
    for (let i = array.length - 1; i >= 0; i--) {
        heapify(array, array.length, i);
    }

    // Sort
    for (let i = array.length - 1; i >= 0; i--) {
        // Swap root and i
        [array[0], array[i]] = [array[i], array[0]];
        heapify(array, i, 0);
    }
    return array;
}

// Mutates argument array
function heapify(array, heapSize, index) {
    const leftChild = (i) => 2 * i + 1;
    const rightChild = (i) => 2 * i + 2;

    let curr = index;
    let stop = false;

    while (!stop) {
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
            // Swap largest child with parent
            [array[curr], array[largest]] = [array[largest], array[curr]];
            curr = largest;

        } else {
            stop = true;
        }
    }
}`;

const python = `def heapSort(arr):
    # ErrorCheck ....

    # New copy to not mutate original array
    array = arr.copy()
    
    # Create initial heap
    for i in range(len(array) - 1, -1, -1):
        heapify(array, len(array), i)
    
    # Sort
    for i in range(len(array) - 1, -1, -1):
        # Swap root and i
        [array[0], array[i]] = [array[i], array[0]]
        heapify(array, i, 0)
    
    return array


# Mutates argument array
def heapify(array, heapSize, index):
    def leftChild(i): return 2 * i + 1
    def rightChild(i): return 2 * i + 2

    curr = index
    stop = False
    
    while not stop:
        leftIndex = leftChild(curr)
        rightIndex = rightChild(curr)
        largest = curr

        if (leftIndex < heapSize) and (array[leftIndex] > array[largest]):
            largest = leftIndex
        
        if (rightIndex < heapSize) and (array[rightIndex] > array[largest]):
            largest = rightIndex
        
        if largest != curr:
            # Swap largest child with parent
            [array[curr], array[largest]] = [array[largest], array[curr]]
            curr = largest

        else:
            stop = True`;

const java = `class HeapSort {
    public static int[] heapSort(int[] arr) {
        // ErrorCheck ....
    
        // New copy to not mutate original array
        int[] array = arr.clone();
        
        // Create initial heap
        for (int i = array.length - 1; i >= 0; i--) {
            heapify(array, array.length, i);
        }
    
        // Sort
        for (int i = array.length - 1; i >= 0; i--) {
            // Swap root and i
            int temp = array[0];
            array[0] = array[i];
            array[i] = temp;
            
            heapify(array, i, 0);
        }
        return array;
    }

    private static int leftChild(int i) { return 2 * i + 1; }
    private static int rightChild(int i) { return 2 * i + 2; }
    
    // Mutates argument array
    private static void heapify(int[] array, int heapSize, int index) {
    
        int curr = index;
        boolean stop = false;
    
        while (!stop) {
            int leftIndex = leftChild(curr);
            int rightIndex = rightChild(curr);
            int largest = curr;
    
            if (leftIndex < heapSize && array[leftIndex] > array[largest]) {
                largest = leftIndex;
            }
    
            if (rightIndex < heapSize && array[rightIndex] > array[largest]) {
                largest = rightIndex;
            }
    
            if (largest != curr) {
                // Swap largest child with parent
                int temp = array[curr];
                array[curr] = array[largest];
                array[largest] = temp;
                
                curr = largest;
    
            } else {
                stop = true;
            }
        }
    }
}`;
export default [
    { language: "javascript", code: js },
    { language: "python", code: python },
    { language: "java", code: java },
];
