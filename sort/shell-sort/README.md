# shell sort 

## 知识点: `sort`, `shell sort`

## 简介
> 一句话: 插入排序的改进版, 每隔 n 个数组成一组进行插入排序排序, 并逐渐将 n 减小至1, 则排序完成
> 
> 每隔 n 个数组成一组数据进行插入排序, 最终将 n 减小到 1, 即最后一次排序为普通版的插入排序

## 算法
```javascript
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
    // 定义一个 gap 个数组的循环
    for (let i = 0; i < gap; i++) {
      // 开始插入排序的锚点定义
      for (let j = i + gap; j < len; j++) {
        let k = j;
        temp = arr[j];
        for (; k - gap >= 0 && arr[k - gap] > temp; k = k - gap) {
          arr[k] = arr[k - gap];
        }
        arr[k] = temp;
      }
    }
  }

  return arr;
}
```

> 上面解法步骤中的 `定义一个 gap 个数组的循环` 这一步的作用是每组数组分别依次进行插入排序, 这步是可以省略的, 我们可以不去对数据进行分组, 每组依次的插入排序, 可以打乱顺序进行排序, 因为每组的插入排序都是一样的操作, 所以完全可以省略这一步(*该实现也是大部分人的实现方法, 但是对于初学者来说, 可读性十分不友好*), 代码如下: 

```javascript
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
```

## 复杂度
### 时间复杂度 `O(n log n)`
推理: todo

### 空间复杂度 `O(1)`
由于没有额外的使用数组, 只用了一个中转变量, 所以是 `O(1)`

## 最快情况
-

## 最慢情况
-

## 稳定性
不稳定
