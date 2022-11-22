function quickSort(arr, left, right) {
  const len = arr.length
  // 通过 left, right 的数组下标, 来实现数组的切分, 用于递归
  if (left === undefined || right === undefined) {
    left = 0
    right = len - 1
  }

  let i = left, j = right
  let temp
  const n = arr[i]

  while (i < j) {
    if (arr[i] > arr[j]) {
      temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
      if (arr[i] == n) {
        i++
      } else {
        j--
      }
    } else {
      j--
    }
  }

  if (i > 0) {
    quickSort(arr, 0, i - 1)
  }

  if (j < right) {
    quickSort(arr, j + 1, right)
  }
}

var arr = [4, 5, 6, 7, 3, 2, 1, 8, 9, 0];
console.time();
const res = quickSort(arr);
console.timeEnd();
console.log(arr);
