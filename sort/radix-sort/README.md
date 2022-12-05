# radix sort 

## 知识点: `sort`, `radix sort`

## 简介
> 一句话: 以数组中数值大小的个位数为 bucket 下标, 将数据放入对应的 bucket 中, 然后再进位到十百千位...依次进行排序
> 
> (LSD[Least Significant Digital]最低有效位数): 如上所述
>
> (MSD[Most Significant Digital]最大有效位数): todo

## 算法
- LSD
```javascript
function radixSort(arr) {
  /** 是否已经排序到数据最高位数 */
  let flag = false;
  let base = 10;
  const len = arr.length;
  /**
   * 这里如果用.fill(new Array()), 则下面进行 bucket[radix].push(n) 的时候, 一次会把所有bucket中的数组全部push进去 n
   */
  const bucket = new Array(10);

  while (!flag) {
    flag = true;
    for (let i = 0; i < len; i++) {
      const r = arr[i] / base;
      if (r >= 1) {
        flag = false;
        base *= 10;
      }
      const floorR = Math.floor(r);
      const diff = r - floorR;
      const radix = Math.floor(diff * 10);
      bucket[radix] ? bucket[radix].push(arr[i]) : (bucket[radix] = [arr[i]]);
    }

    let j = 0;
    for (let i = 0; i < 10; i++) {
      while (bucket[i].length) {
        arr[j++] = bucket[i].shift();
      }
    }
  }
}

```

## 复杂度
### 时间复杂度 `O(k * n)`
k 为数组中南数据最大的位数

### 空间复杂度 `O(k * n)`
k 为数组中数据最大的位数

## 最快情况
`O(k * n)`

## 最慢情况
`O(k * n)`

## 稳定性
稳定
