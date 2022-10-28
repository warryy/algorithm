// An optimized version of Bubble Sort
function insertSort(arr) {
    const len = arr.length
    for (let i = 0; i < len - 1; i++) {
        let j = i + 1;
        const current = arr[j]

        while (j > 0 && arr[j] < arr[j - 1]) {
            arr[j - 1] = arr[j]
            j--
        }

        arr[j] = current
    }
}

// Driver program to test above functions
var arr = [2, 1]
// var arr = [4, 5, 6, 7, 3, 2, 1, 8, 9, 0];
var n = 7;

insertSort(arr, arr.length - 1)

console.log(arr)