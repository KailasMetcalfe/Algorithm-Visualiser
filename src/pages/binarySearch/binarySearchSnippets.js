const binarySearchJs = `function binarySearch(array, item) {
    // ErrorCheck ....

    let found = false;
    let leftP = 0;
    let rightP = array.length - 1;
    let middleP = Math.floor((leftP + rightP) / 2);

    while (!found && leftP <= rightP) {
        if (array[middleP] === item) found = true;
        else {
            if (array[middleP] > item) rightP = middleP - 1;
            else leftP = middleP + 1;

            middleP = Math.floor((leftP + rightP) / 2);
        }
    }
    return found;
}`;

const binarySearchPy = `import math
def binarySearch(array, item):
    # ErrorCheck ....
    
    found = False
    leftP = 0
    rightP = len(array) - 1
    middleP = math.floor((leftP + rightP) / 2)

    while (not(found)) and (leftP <= rightP):
        if array[middleP] == item:
            found = True
        else:
            if array[middleP] > item:
                rightP = middleP - 1
            else:
                leftP = middleP + 1

        middleP = math.floor((leftP + rightP) / 2)
        
    return found`;

const binarySearchJava = `public class Algorithms {
    public static boolean binarySearch(int[] array, int item) {
        // ErrorCheck ....

        boolean found = false;
        int leftP = 0;
        int rightP = array.length - 1;
        int middleP = (leftP + rightP) / 2;
    
        while (!found && leftP <= rightP) {
            if (array[middleP] == item) found = true;
            else {
                if (array[middleP] > item) rightP = middleP - 1;
                else leftP = middleP + 1;
    
                middleP = (leftP + rightP) / 2;
            }
        }
        return found;
    }
}`;

export default [
    { language: "javascript", code: binarySearchJs },
    { language: "java", code: binarySearchJava },
    { language: "python", code: binarySearchPy },
];
