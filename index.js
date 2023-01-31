function swapArr(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/**
 * 分割函数, 返回当前基准值所在的下标
 */
function partition(arr, left, right) {
  let base = left, index = left + 1
  for (let cur = index; cur <= right; cur ++) {
    if (arr[cur] < arr[base]) {
      swapArr(arr, index, cur)
      index++
    }
  }

  swapArr(arr, base, index - 1)
  return index -1
}

function quickSort(arr, left, right) {
  const len = arr.length;
  // 通过 left, right 的数组下标, 来实现数组的切分, 用于递归
  if (left === undefined || right === undefined) {
    left = 0;
    right = len - 1;
  }

  const index = partition(arr, left, right)
  if (left < index - 1) {
    quickSort(arr, left, index - 1)
  }
  if (index + 1 < right) {
    quickSort(arr, index + 1, right)
  }
}

function quickSortIteration(arr, left, right) {
  left = left ?? 0;
  right = right ?? arr.length - 1;

  const stack = [];
  stack.push([left, right]);

  while (stack.length) {
    let [_left, _right] = stack.shift();
    let l = _left,
      r = _right;
      
    const n = arr[l];
    
    while (l < r) {
      if (arr[l] > arr[r]) {
        swapArr(arr, l, r);
        if (arr[r] === n) {
          l++;
        } else {
          r--;
        }
      } else {
        if (arr[l] === n) {
          r--
        } else {
          l++
        }
      }
    }

    // 如果左边剩余数组长度 > 1
    if (l - 1 > _left) {
      stack.push([_left, l - 1]);
    }

    // 如果右边剩余数组长度 > 1;
    if (_right > l + 1) {
      stack.push([l + 1, _right]);
    }
  }
}

var arr = [4, 5, 6, 7, 3, 5, 2, 1, 8, 9, 0];
// var arr = [3, 2, 5, 1, 4];

// console.log(arr);
console.time();
quickSortIteration(arr);
console.timeEnd();
// console.time();
// quickSort2(arr);
// console.timeEnd();
console.log(arr);
