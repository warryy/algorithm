
function countingSort(arr) {
  let max = 0
  const len = arr.length
  for (let i = 0; i < len; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  const countingArr = []

  for (let i = 0; i < len; i++) {
    countingArr[arr[i]] = countingArr[arr[i]] ? countingArr[arr[i]] + 1 : 1
  }

  const resArr = []
  for (let i = 0; i <= max; i++) {
    while (countingArr[i] > 0) {
      resArr.push(i)
      countingArr[i] --
    }
  } 
  return resArr
}

var arr = [4, 5, 6, 7, 3, 5, 2, 1, 8, 9, 0];
console.time();
const res = countingSort(arr);
console.timeEnd();
console.log(res);
