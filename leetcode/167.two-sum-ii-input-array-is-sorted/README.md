# Two sum(ing)

## 知识点: `Array`

## 难度: `Easy`

## 题目:
[leetCode 传送门](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
[乐扣 传送门](https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/)

> 给你一个下标从 1 开始的整数数组 numbers ，该数组已按 非递减顺序排列  ，请你从数组中找出满足相加之和等于目标数 target 的两个数。如果设这两个数分别是 numbers[index1] 和 numbers[index2] ，则 1 <= index1 < index2 <= numbers.length 。
>
> 以长度为 2 的整数数组 [index1, index2] 的形式返回这两个整数的下标 index1 和 index2。
>
> 你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。
>
> 你所设计的解决方案必须只使用常量级的额外空间。

## 解法:

### 1. 仿照两数之和的版本(提交的时候超时了)
```javascript
var twoSum = function (numbers, target) {
    const checkedNumbers = [numbers[0]]
    for (let i = 1; i < numbers.length; i++) {
        const idx = checkedNumbers.indexOf(target - numbers[i])
        if (idx !== -1) {
            return [idx + 1, i + 1]
        }
        checkedNumbers.push(numbers[i])
    }
}
```

### 2. 上一版完全没用到已排序的条件, 然后想着优化下 indexOf 操作耗费的时间, 当第一个数字小于目标数字的一半时, 这个数字一定不需要去已遍历数组中去寻找和其匹配的数据
该方法应该是卡在了及格线上
```javascript
var twoSum = function (numbers, target) {
    const checkedNumbers = [numbers[0]]
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < Math.floor(target / 2)) {
            checkedNumbers.push(numbers[i])
        } else {
            const idx = checkedNumbers.indexOf(target - numbers[i])
            if (idx !== -1) {
                return [idx + 1, i + 1]
            }
            checkedNumbers.push(numbers[i])
        }
    }
};
```
### 3. 看到了大家都不用空间的解法, 感觉就是个快排的思想, 用两个指针去换空间
```javascript
var twoSum = function (numbers, target) {
    let head = 0, tail = numbers.length - 1
    while (head < tail) {
        const sum = numbers[head] + numbers[tail]
        if (sum === target) {
            return [head + 1, tail + 1]
        } else if (sum > target) {
            --tail
        } else {
            ++head
        }
    }
};
```

### 好玩的事, 还看到有人在函数内加了这行代码, 厉害了, 但是它被注释掉了, 应该是本来数组长度为2的时候, 算法也不会浪费很多时间, 所以这个优化没什么必要
```javascript
if (numbers.length === 2) return [1, 2]
```