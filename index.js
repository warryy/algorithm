function swapArr(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function quickSort(arr, left, right) {
  const len = arr.length;
  // 通过 left, right 的数组下标, 来实现数组的切分, 用于递归
  if (left === undefined || right === undefined) {
    left = 0;
    right = len - 1;
  }

  let i = left,
    j = right;
  let temp;
  const n = arr[i];

  while (i < j) {
    if (arr[i] > arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      if (arr[j] == n) {
        i++;
      } else {
        j--;
      }
    } else {
      if (arr[i] === n) {
        j--;
      } else {
        i++;
      }
    }
  }
  console.log([...arr])
  if (i > left) {
    quickSort(arr, left, i - 1)
  }

  if (i < right) {
    quickSort(arr, i + 1, right)
  }
}

var arr = [4, 5, 6, 7, 3, 5, 2, 1, 8, 9, 0];
// var arr = [3, 2, 5, 1, 4];

console.log(arr);
console.time();
quickSort(arr);
console.timeEnd();
console.log(arr);
