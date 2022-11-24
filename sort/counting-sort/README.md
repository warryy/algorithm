# counting sort 

## 知识点: `sort`, `counting sort`

## 简介
> 一句话: 定义临时数组, 将数组值当做临时数组的下标, 每出现一次该值, 则临时数组下标对应计数 +1
> 
> **注意**
>
> 需要注意的是, 数组需要有最大值的边界, 当数组最小值为负数: `-n` 时, 还要将数组元素全部偏移 `n`, 以使得临时数组下标全为非负数

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
### 时间复杂度 `O(n + k)`


### 空间复杂度 `O(k)`

## 最快情况

## 最慢情况

## 稳定性
不稳定