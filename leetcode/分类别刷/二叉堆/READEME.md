# 二叉堆(优先级队列)
二叉树结构的大顶堆或者小顶堆
## 结构描述
```typescript
type ListNode = {
    val: number
    left: ListNode | null
    right: ListNode | null
}

class BinaryHeep {
  public size: number
  public insert: (n: ListNode) => void 
  public delMax: () => ListNode
  
  private list: ListNode[]
  private swim: (i: number) => void
  private sink: (i: number) => void
  private parent: (i: number) => number
  private left: (i: number) => number
  private right: (i: number) => number
  private less: (i: number, j: number) => boolean
  private swap: (i: number, j: number) => void
}
```

### 优势描述
堆顶总是最大值或最小值

### 对应题目
[23. 合并K个升序链表](https://leetcode.cn/problems/merge-k-sorted-lists/)