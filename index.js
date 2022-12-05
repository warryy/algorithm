function swapArr(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function radixSort(arr) {
  /** 是否已经排序到数据最高位数 */
  let flag = false;
  let base = 10;
  const len = arr.length;
  /**
   * 这里如果用.fill(new Array()), 则下面进行 bucket[radix].push(n) 的时候, 一次会把所有bucket中的数组全部push进去 n
   */
  const bucket = new Array(10);

  while (!flag) {
    flag = true;
    for (let i = 0; i < len; i++) {
      const r = arr[i] / base;
      if (r >= 1) {
        flag = false;
        base *= 10;
      }
      const floorR = Math.floor(r);
      const diff = r - floorR;
      const radix = Math.floor(diff * 10);
      bucket[radix] ? bucket[radix].push(arr[i]) : (bucket[radix] = [arr[i]]);
    }

    let j = 0;
    for (let i = 0; i < 10; i++) {
      while (bucket[i].length) {
        arr[j++] = bucket[i].shift();
      }
    }
  }
}


// var arr = [4, 5, 6, 7, 3, 5, 2, 1, 8, 9, 0];
// var arr = [4, 5, 6, 7, 3, 5, 2, 1, 8, 9, 0, 11, 22, 23];
// var arr = [222, 223];
console.time();
const res = radixSort(arr);
console.timeEnd();
console.log(arr);
