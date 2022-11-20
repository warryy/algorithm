# merge sort 

## 知识点: `sort`, `merge sort`

## 简介
> 一句话: 定义 n = 2, 4, 8, 16..., 每 n 个数为数组的一个子数组, 对子数组进行分别排序
> 
> 采用分治法(Divide And Conquer), 先将一个数组分为两个元素一组的子数组, 对每个子数组进行排序, 然后将子数组两两合并, 一直到合并出来整个已排序的数组
>
> 实现方法:
### 递归
> 1. 数组一分为二, 单独进行排序
> 2. 定义一个当前数组大小的临时数组
> 3. 定义两个指针分别指向两个数组头, 指针元素比较, 较小的放入临时数组, 并向后移动该指针, 直至遍历完一个数组, 将另一个数组未遍历部分直接放入临时数组
> 4. 返回临时数组, 进行迭代

## 算法
### 迭代版本
```javascript
function mergeSort(arr) {
  const resArr = [...arr];
  const len = arr.length;

  // 1. 定义 n = 1, 2, 4, 8..., 是切片数组的长度
  for (let n = 1; n < len; n *= 2) {
    // 定义每次进行迭代的数组
    let tempArr = [...resArr];
    // 2. 每两个子数组分为一组
    for (let start = 0; start < len; start += 2 * n) {
      // 3. 将分组切片成两组, 用于进行合并
      // 3.1 标定两个数组的起始位置
      let low = start,
        mid = Math.min(start + n, len),
        high = Math.min(start + n + n, len);
      // 3.2 标定两个数组的遍历指针, 以及结果数组已经遍历的数组下标
      let cur = start,
        arr1s = low,
        arr1e = mid,
        arr2s = mid,
        arr2e = high;

      // 4. 将两个数组合并
      while (arr1s < arr1e && arr2s < arr2e) {
        resArr[cur++] =
          tempArr[arr1s] > tempArr[arr2s] ? tempArr[arr2s++] : tempArr[arr1s++];
      }

      // 5. 未遍历完的数组, 剩下元素全部合并入结果数组
      while (arr1s < arr1e) {
        resArr[cur++] = tempArr[arr1s++];
      }

      while (arr2s < arr2e) {
        resArr[cur++] = tempArr[arr2s++];
      }
    }
  }

  return resArr;
}
```

### 递归版本
```javascript
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
```

## 复杂度
### 时间复杂度 `O(n log n)`
推理: todo

### 空间复杂度 `O(n log n)`
推理: todo

## 最快情况
-

## 最慢情况
-

## 稳定性
不稳定
