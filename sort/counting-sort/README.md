# counting sort 

## 知识点: `sort`, `counting sort`

## 简介
> 一句话: 取数组的第一个数作为基准 n, 将数组中小于 n 的数放在坐标, 大于 n 的数放在右边, 然后对左右两边进行递归处理
> 
> 获取到数组的最大值

## 算法
```javascript
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
```

## 复杂度
### 时间复杂度 `O(n)`


### 空间复杂度 `O(n)`

## 最快情况

## 最慢情况

## 稳定性
不稳定