function mergeSort(arr) {
  const resArr = [];
  const len = arr.length;

  if (len <= 1) {
    return arr;
  }

  const seg = Math.ceil(len / 2);

  // 获取已经排好序的两个数组
  const arr1 = mergeSort(arr.slice(0, seg));
  const arr2 = mergeSort(arr.slice(seg));
  const arr1Len = arr1.length;
  const arr2Len = arr2.length;

  let cur = 0,
    arr1s = 0,
    arr2s = 0;

  // 两个数组合并
  while (arr1s < arr1Len && arr2s < arr2Len) {
    resArr[cur++] = arr1[arr1s] > arr2[arr2s] ? arr2[arr2s++] : arr1[arr1s++];
  }

  while (arr1s < arr1Len) {
    resArr[cur++] = arr1[arr1s++];
  }

  while (arr2s < arr2Len) {
    resArr[cur++] = arr2[arr2s++];
  }

  return resArr;
}

var arr = [4, 5, 6, 7, 3, 2, 1, 8, 9, 0];
console.time();
const res = mergeSort(arr);
console.timeEnd();
console.log(res);
