var ListNode = /** @class */ (function () {
    function ListNode(n) {
        this.val = n;
        this.left = null;
        this.right = null;
    }
    return ListNode;
}());
var BinaryHeap = /** @class */ (function () {
    function BinaryHeap() {
        var _this = this;
        this.list = [];
        this.size = 0;
        /** 第 i 个元素是否比第 j 个元素大 */
        this.larger = function (i, j) {
            var _a, _b;
            return ((_a = _this.list[i]) === null || _a === void 0 ? void 0 : _a.val) > ((_b = _this.list[j]) === null || _b === void 0 ? void 0 : _b.val);
        };
        this.swap = function (i, j) {
            var temp = _this.list[i];
            _this.list[i] = _this.list[j];
            _this.list[j] = temp;
        };
    }
    BinaryHeap.prototype.parent = function (i) {
        return Math.floor(i / 2);
    };
    BinaryHeap.prototype.left = function (i) {
        return 2 * i;
    };
    BinaryHeap.prototype.right = function (i) {
        return 2 * i + 1;
    };
    BinaryHeap.prototype.swim = function (idx) {
        var i = idx;
        while (i > 1 && this.larger(this.parent(i), i)) {
            this.swap(this.parent(i), i);
            i = this.parent(i);
        }
    };
    BinaryHeap.prototype.sink = function (idx) {
        var i = idx;
        /** 这个节点是非叶子节点 */
        while (this.left(i) <= this.size) {
            var min = this.left(i);
            if (this.larger(this.left(i), this.right(i))) {
                min = this.right(i);
            }
            if (this.larger(i, min)) {
                this.swap(i, min);
            }
            i = min;
        }
    };
    //   加上下面两个方法就成了优先级队列了
    BinaryHeap.prototype.insert = function (node) {
        this.size++;
        this.list[this.size] = node;
        this.swim(this.size);
    };
    BinaryHeap.prototype.delMin = function () {
        var min = this.list[1];
        this.swap(1, this.size);
        this.list[this.size] = null;
        this.size--;
        this.sink(1);
        return min;
    };
    return BinaryHeap;
}());
var heap = new BinaryHeap();
heap.insert(new ListNode(1));
heap.insert(new ListNode(1));
heap.insert(new ListNode(2));
console.log(JSON.stringify(heap.list, null, 2));
console.log('====');
console.log(JSON.stringify(heap.delMin(), null, 2));
console.log('====');
console.log(JSON.stringify(heap.list, null, 2));
console.log('====');
heap.insert(new ListNode(3));
console.log('====');
console.log(JSON.stringify(heap.list, null, 2));
