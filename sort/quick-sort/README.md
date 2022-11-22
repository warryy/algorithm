# quick sort 

## 知识点: `sort`, `quick sort`

## 简介
> 一句话: 取数组的第一个数作为基准 n, 将数组中小于 n 的数放在坐标, 大于 n 的数放在右边, 然后对左右两边进行递归处理
> 
> 1. 在数组中找一个基准值 n, 为方便起见, 选取第一个数字
> 2. 将数组中小于 n 的数字移至 n 的坐标, 大于 n 的数字移至 n 的右边
>> 这里是快排的实现精髓部分, 定义指针 i, j 分别指向数组头尾, 此时 i 也为基准数字 n, 比较 i, j 两个数据的大小, 如果 j 处数据小于 n, 则将 i, j 的值位置, 将 i + 1, 直到 i === j, 循环停止
> 3. 将基准数字左右两边的数据进行相同的操作
>
> 总结: 快排是在冒泡的基础上改进而来的, 冒泡算法每次只能交换相邻两个元素, 而快排则可以跨越元素进行交换, 所以交换次数会减少

## 算法
```javascript
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
```

## 复杂度
### 时间复杂度 `O(n log n)`


### 空间复杂度 `O(log n)`

## 最快情况
O(n log n)

## 最慢情况
O(n^2)

## 稳定性
不稳定