# Two sum(ing)

## 知识点: `Array`

## 难度: `Easy`

## 题目:
https://leetcode.com/problems/two-sum/

## 解法:

### 1. Brute force way
二次遍历数组, 需要注意的是, 第二次遍历的开始节点要在第一次遍历的后面, 因为题目中提到了不可以用重复的一个数字
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};
```
### 2. 第一种方法的改进
第一种方法复杂度 O(n^2), 由此可以想办法优化第二次遍历的查找过程, 用空间换时间

算法开始前遍历数组, 以 {value: index} 的形式进行所有数据的缓存, 这样就是全遍历两次解题, 但是当数组中两个元素相等时, 此种方式失效

方法一的解题思路是, 从第一个元素开始查找, 每次查找后面所有元素是否与之匹配
![image](https://warryy.github.io/images/algorithm/1.two-sum/two-sum-1.jpg)
可以想是否有一种方式, 可以边遍历查找, 边缓存数据
我们将方法一的解题思路反过来想, 从第 n 个元素查找, 每次都去看前 n - 1 条数据,是否有符合条件的, 由于前 n - 1 条数据都是我们遍历过得, 那么我们只需要将遍历过得数据都缓存下来, 就可以实现 O(n) 复杂度

即:

每次遍历时, 查看 cache 里面是否有我们需要的数字, 如果有的话, 则输出结果, 如果没有, 就将当前数据(cur) 放入 cache 中
![image](https://warryy.github.io/images/algorithm/1.two-sum/two-sum-2.jpg)
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const cache = {}
    for(let k in nums) {
      if (cache[target - nums[k]] !== undefined) {
            return [cache[target - nums[k]], k]
          }
      cache[nums[k]]  = k
    }
};
```

### 拓展:
放开有且只有一条答案的限制应该怎么办?