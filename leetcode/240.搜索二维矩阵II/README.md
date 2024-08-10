# search-a-2d-matrix-ii

## 知识点: `Array`

## 难度: `middle`

## 题目:
[https://leetcode.cn/problems/search-a-2d-matrix-ii](https://leetcode.cn/problems/search-a-2d-matrix-ii)

## 解法:

### 1. 稍好一点的暴力枚举
`O(m * n)` `O(1)`
```typescript
/**
 * 这个是我自己想出来的, 找斜对角线的两个边界值, min, max
 * 找到后, 
 * 以 min 值为右下角的正方形, 都不符合条件
 * 以 max 值为左上角的正方形, 都不符合条件
 */
function searchMatrix(matrix: number[][], target: number): boolean {
  let min = 0,
    max = Math.min(matrix.length - 1, matrix[0].length - 1);
  while (min <= max && matrix[min][min] <= target) {
    if (matrix[min][min] === target) {
      return true;
    }
    ++min;
  }
  max = min;
  --min;
  for (let i = 0; i <= min; ++i) {
    for (let j = max; j < matrix[0].length; ++j) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }

  for (let i = max; i < matrix.length; ++i) {
    for (let j = 0; j <= min; ++j) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }
  return false;
}
```

### 2. 走脑子
`O(m + n)` `O(1)`
```typescript
/**
 * z 字型查找法, 从右上角向左下角找目标值, 
 * 看到这里, 先自己想想以这个思想怎么写代码?
 * 
 * 
 * 右上角坐标为 (i, j), 
 * 坐标当前数组值大于 target: j--. j 的那一列都不用看了, 因为都比当前数字大
 * 同理, 小于 target: i ++
 * 明了后, 想想为什么从右上向左下角找?
 * 
 * 
 * 之所以这样找, 是因为右上 -> 左下, 这个方向, 
 * 向左走, 值会小于当前值, 向下走, 值会大于当前值, 
 * 也就是说, 你每次判断完目标值和当前值的关系后, 
 * 都会有唯一的一个确认的方向让你去走
 */
function searchMatrix(matrix: number[][], target: number): boolean {
    let i = 0, j = matrix[0].length - 1
    while (i < matrix.length && j >= 0) {
        if (matrix[i][j] === target) {
            return true
        }

        if (matrix[i][j] > target) {
            --j
        } else {
            ++i
        }
    }
    return false
}
```
