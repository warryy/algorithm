# largest-rectangle-in-histogram

## 知识点: `Stack Array`

## 难度: `Hard`

## 题目:
[https://leetcode.com/problems/largest-rectangle-in-histogram/](https://leetcode.com/problems/largest-rectangle-in-histogram/)

## 解法:
```typescript
/**
 * 该方法是单调栈方法, 但是本质是暴力求解方法的优化(所以要先了解暴力求解)
 * 暴力方法即遍历每个柱子, 以此柱子当做矩形的高
 * 然后找到当前柱子两侧比它矮的第一个元素, 则这两个元素之间的区间就是矩形的宽
 * 
 * 我们发现, 暴力求解的时候, 就是在找当前柱子 a 左右两边的边界
 * 即第一个比他小的元素的下标
 * 
 * 而我们正常从左到右遍历数组的时候, 当你遍历到 a 时, 你已经遍历过了 a 左边的元素, 
 * 因此我们一定有办法, 通过空间换时间的方式, 将 a 柱子的左侧第一个比他小的元素的下标记录下来
 * 
 * 顺着这个思路, 就有了单调栈方法
 * 
 * 思路有了一个大框:
 * 大框架: 
 * 思路: 一次遍历数组
 * 变量: 一个用来记录最大面积的返回值: maxRas, 一个用来记录 a 元素左侧边界下标的栈
 * 
 * 进一步细化
 * 单次遍历的过程中, 分为 当前值 <, =, > 栈顶下标的值
 * 当前值 > 栈顶下标对应的值:
 *      当前下标直接入栈
 * 当前值 = 栈顶下标对应的值:
 *      栈顶的最大面积值一定和当前的最大面积值一样, 所以栈顶下标直接换为当前下标
 * 当前值 < 栈顶下标对应的值:
 *      栈顶元素一直出栈, 并计算栈顶元素对应的最大面积值, 一直到栈空了, 或者当前值大于等于栈顶值结束, 然后把当前值对应的下标压到栈里
 * 
 * 还有个边界优化思路, 即开始的时候, 要在栈内压入一个0, 并在原数组前后各增加一个0, 这三个0, 会为我们后续的循环判断提供便利
 */
function largestRectangleArea(heights: number[]): number {
  let maxRes = 0;
  const idxStack = [0];
  heights.push(0);
  heights.unshift(0);

  for (let i = 0; i < heights.length; ++i) {
    // 如果当前值大于栈顶, 则将当前值入栈
    if (heights[i] > heights[idxStack[idxStack.length - 1]]) {
      idxStack.push(i);
      continue;
    }

    // 如果当前值等于栈顶值, 则将栈顶值弹出, 将当前下标压入栈
    if (heights[i] === heights[idxStack[idxStack.length - 1]]) {
      idxStack.pop();
      idxStack.push(i);
      continue;
    }

    // 如果栈有长度, 且当前值小于栈顶值
    // 栈顶最大值下标出栈, 并且需要求出当前出栈的这个下标元素, 在柱状图中的最大面积
    // 因为是单调栈, 所以栈顶倒数第二个值, 即小于栈顶值的左侧的第一个元素下标, 而当前遍历的变量 i, 即小于栈顶值的右侧的第一个元素下标
    // 此时可以求出栈顶值为最大高度的面积
    while (
      idxStack.length &&
      heights[i] < heights[idxStack[idxStack.length - 1]]
    ) {
      let curIdx = idxStack.pop();
      let l = idxStack[idxStack.length - 1];
      let r = i;
      maxRes = Math.max((r - l - 1) * heights[curIdx], maxRes);
    }

    // 如果当前值等于栈顶值, 则将栈顶值弹出, 将当前下标压入栈
    if (heights[i] === heights[idxStack[idxStack.length - 1]]) {
      idxStack.pop();
      idxStack.push(i);
      continue;
    }

    // 当前值大于栈顶值, 将当前下标压入栈
    idxStack.push(i);
  }

  return maxRes;
}
```
