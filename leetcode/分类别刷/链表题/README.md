# 链表题
## 入门
- [21. 合并两个有序链表](https://leetcode.cn/problems/merge-two-sorted-lists/description/)
> 1. 注意使用递归和迭代两种解法
> 2. 迭代解法, 怎样优化: *判断如果是第一次迭代, 需要将第一个节点记录下来, 最终返回这个节点?* 这个特殊逻辑?

- [86. 分隔链表](https://leetcode.cn/problems/partition-list/)
> 1. 需要两个变量存大小链表头, 两个指针存两个链表尾, 一个指针遍历当前链表
> 2. 每次遍历原链表, 都需要将当前遍历的节点的 next 断开, 这样才会让大小链表尾指针的 next 是空的
