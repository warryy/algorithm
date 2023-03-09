# heap sort 

## 知识点: `sort`, `heap sort`

## 简介
> 一句话: 通过构建大顶堆, 每次堆顶的元素为最大的数据, 然后递归计算
> 
> 大顶堆, 即父节点的元素大于等于每个子节点元素的二叉树, 通过把数组构建成大顶堆, 可以获取到整个数组中最大的一个数, 将最大的数和数组尾部数据交换, 然后剩下的数组部分继续构建大顶堆
- 如何构建大顶堆?
> 找到大顶堆的第一个非叶子节点: `i` = `Math.floor(n / 2) - 1` , 将 `i` 和 `2i + 1` 以及 `2i + 2` 元素进行比较, 比 `i` 大的元素和 `i` 交换位置, 然后 `i` 减一, 继续比较, 直到 `i` === `0`

## 算法
```javascript
// 交换数组中i, j 位置
function swapArr (arr, i, j) {
  const swapTemp = arr[i];
  arr[i] = arr[j];
  arr[j] = swapTemp;
}
// 主程序
function heapSort(arr, lenArg) {
  const len = lenArg || arr.length;

  if (len <= 1) {
    return;
  }

  let i = Math.floor(len / 2) - 1;

  // 找到数组的第一个非叶子节点
  while (i >= 0) {
    let j = i * 2 + 1,
      k = j + 1;
    
    // 和左叶子节点比
    if (j < len && arr[i] < arr[j]) {
      swapArr(arr, i, j) 
    }

    // 和右叶子节点比
    if (k < len && arr[i] < arr[k]) {
      swapArr(arr, i, k)
    }

    i--;
  }

  // 将堆顶部最大根节点移动至尾部
  swapArr(arr, 0, len - 1)

  heapSort(arr, len - 1);
}
```


## 复杂度
### 时间复杂度 `O(n log n)`

### 空间复杂度 `O(1)`
插入排序

## 最快情况
O(n log n)

## 最慢情况
O(n log n)

## 稳定性
不稳定
