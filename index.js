function swapArr(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
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
        r--;
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
console.time();
const res = quickSortIteration(arr);
console.timeEnd();
console.log(arr);
