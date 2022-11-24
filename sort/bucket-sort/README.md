# bucket sort 

## 知识点: `sort`, `bucket sort`

## 简介
> 一句话: 将 n 个数尽量平均放入 k 个桶中, 且左边的桶比右边的桶数字都要小, 然后对单个桶进行数组排序, 输出数据
> 
> 如一句话所说, 此算法的两个关键点在于 n 个数如何尽量平均放入 k 个桶中, 且该算法单个桶依赖其他数组排序方法, 使用范围太窄, 个人对其有偏见

## 算法
```javascript
// 这里是快排
function quickSort(){}
function bucketSort(arr) {
  const bucket = new Array(10).fill([])
  const len = arr.length
  // 将数字模 10, 余数为桶的下角标
  // 通过此方法可以桶进行大小升序排序
  for (let i = 0; i < len; i ++) {
    const reminder = arr[i] % 10
    bucket[reminder].push(arr[i])
  }

  // 每个桶中的数据进行单独排序
  for (let i = 0; i < len; i++) {
    quickSort(bucket[i])
  }

  const res = []

  // 已排序的桶元素依次放入到 res 数组中
  for (let i = 0; i < len; i++) {
    while(bucket[i].length) {
      res.push(bucket.shift())
    }
  } 

  return res
}
```

## 复杂度
### 时间复杂度 `O(n + (n log n - n log m)`
推理: todo

### 空间复杂度 `O( n + k )`
由于没有额外的使用数组, 只用了一个中转变量, 所以是 `O(1)`

## 最快情况
todo

## 最慢情况
todo

## 稳定性
稳定
