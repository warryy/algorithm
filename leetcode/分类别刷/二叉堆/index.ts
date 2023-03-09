class ListNode {
  constructor(n) {
    this.val = n;
    this.left = null
    this.right = null
  }
  val: number;
  left: ListNode | null;
  right: ListNode | null;
}

class BinaryHeap {
  constructor() {}
  public list: ListNode[] = [];
  public size = 0;

  /** 第 i 个元素是否比第 j 个元素大 */
  private larger: (i: number, j: number) => boolean = (i, j) => {
    return this.list[i]?.val > this.list[j]?.val;
  };
  private parent(i: number) {
    return Math.floor(i / 2);
  }
  private left(i: number) {
    return 2 * i;
  }
  private right(i: number) {
    return 2 * i + 1;
  }

  private swap: (i: number, j: number) => void = (i, j) => {
    const temp = this.list[i];
    this.list[i] = this.list[j];
    this.list[j] = temp;
  };

  private swim(idx: number) {
    let i = idx;
    while (i > 1 && this.larger(this.parent(i), i)) {
      this.swap(this.parent(i), i);
      i = this.parent(i)
    }
  }

  private sink(idx: number) {
    let i = idx;
    /** 这个节点是非叶子节点 */
    while (this.left(i) <= this.size) {
      let min = this.left(i);
      if (this.larger(this.left(i), this.right(i))) {
        min = this.right(i);
      }
      if (this.larger(i, min)) {
        this.swap(i, min);
      }
      i = min;
    }
  }

  //   加上下面两个方法就成了优先级队列了
  public insert(node: ListNode) {
    this.size++;
    this.list[this.size] = node;
    this.swim(this.size);
  }
  public delMin() {
    const min = this.list[1];
    this.swap(1, this.size);
    this.list[this.size] = null;
    this.size--;
    this.sink(1);
    return min;
  }
}

const heap = new BinaryHeap();
heap.insert(new ListNode(1));
heap.insert(new ListNode(1));
heap.insert(new ListNode(2));
console.log(JSON.stringify(heap.list, null, 2));
console.log('====')
console.log(JSON.stringify(heap.delMin(), null, 2))
console.log('====')
console.log(JSON.stringify(heap.list, null, 2));
console.log('====')
heap.insert(new ListNode(3))
console.log('====')
console.log(JSON.stringify(heap.list, null, 2))