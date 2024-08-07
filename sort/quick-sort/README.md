# quick sort 

## 知识点: `sort`, `quick sort`

## 简介
> 一句话: 取数组的第一个数作为基准 n, 将数组中小于 n 的数放在坐标, 大于 n 的数放在右边, 然后对左右两边进行递归处理
> 
> 1. 在数组中找一个基准值 n, 为方便起见, 选取第一个数字
> 2. 将数组中小于 n 的数字移至 n 的坐标, 大于 n 的数字移至 n 的右边(取名为分区操作)
>> 2.1 这里是快排的实现精髓部分(这个方法有点不宜于理解, 易理解版本看2.2), 定义指针 i, j 分别指向数组头尾, 此时 i 也为基准数字 n, 比较 i, j 两个数据的大小, 如果 j 处数据小于 n, 则将 i, j 的位置调换, 如果调换后 i 的值是基准值, 则将 j--, 否则将 i++, 直到 i === j, 循环停止
>>
>> 2.2 将数组第base = 0位元素取为基准值, 从第 `cur = base + 1` 位开始向后遍历, 并使用 `index = base + 1` 作为分割值, 如果 `cur` 比 `base` 小, 则将 `cur` 和 `index` 进行交换, 并进行 `index++` 操作, 遍历完毕后, 将 `cur` 和 `index - 1` 处元素进行互换, 从而完成一次分区操作
> 3. 将基准数字左右两边的数据进行相同的操作
>
> 总结: 快排是在冒泡的基础上改进而来的, 冒泡算法每次只能交换相邻两个元素, 而快排则可以跨越元素进行交换, 所以交换次数会减少

## 算法
1. 递归实现
```javascript
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
  if (i > left) {
    quickSort(arr, left, i - 1)
  }

  if (i < right) {
    quickSort(arr, i + 1, right)
  }
}
```
*递归实现2*
```javascript
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
  return index - 1
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
```

2. 迭代实现
> 用栈将每次需要排序的数组下标标记存下来, 然后通过清空栈来进行子数组的排序
```javascript
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