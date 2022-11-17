// An optimized version of Bubble Sort
function shellSort(arr) {
  var len = arr.length,
    temp,
    gap = 1;

  while (gap < len / 3) {
    //动态定义间隔序列
    gap = gap * 3;
  }

  // 动态缩小 gap
  for (; gap > 0; gap = Math.floor(gap / 3)) {
    // 开始插入排序的锚点定义
    for (let j = gap; j < len; j++) {
      let k = j;
      temp = arr[j];
      // 排序
      for (; k - gap >= 0 && arr[k - gap] > temp; k = k - gap) {
        arr[k] = arr[k - gap];
      }
      arr[k] = temp;
    }
  }

  return arr;
}

// Driver program to test above functions
// var arr = [2, 1];
var arr = [4, 5, 6, 7, 3, 2, 1, 8, 9, 0];
var n = 7;

shellSort(arr);

console.log(arr);
