const javascript = `function insertionSort(arr) {
    // ErrorCheck ....

    // New copy to not mutate original array
    let array = [...arr]; 

    for (let i = 1; i < array.length; i++) {
        let temp = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j--;
        }

        j++;
        array[j] = temp;
    }
    return array;
}`;

const java = `class InsertionSort {
    public static int[] insertionSort(int[] arr) {
        // ErrorCheck ....

        // New copy to not mutate original array
        int[] array = arr.clone();

        for (int i = 1; i < array.length; i++) {
            int temp = array[i];
            int j = i - 1;

            while (j >= 0 && array[j] > temp) {
                array[j + 1] = array[j];
                j--;
            }

            j++;
            array[j] = temp;
        }
        return array;
    };
}`;

const python = `def insertionSort(arr):
    # ErrorCheck ....

    # New copy to not mutate original array
    array = arr.copy()

    for i in range(1, len(array)):
        temp = array[i]
        j = i - 1

        while (j >= 0) and (array[j] > temp):
            array[j + 1] = array[j]
            j -= 1
        

        j+= 1
        array[j] = temp
    
    return array


print(insertionSort([7,2,5,6,1]))`;

export default [
    { language: "javascript", code: javascript },
    { language: "java", code: java },
    { language: "python", code: python },
];
