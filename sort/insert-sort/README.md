# selection sort (选择排序) 

## 知识点: `sort`, `selection sort`

## 简介
> 一句话: `选择` 未排序中最小的元素交换到已排序数组尾上
> 
> `选择排序` 的思想可以看做傻瓜思想, 或者是冒泡排序的反向版本
> 
> 思想: 遍历数组, 将原数组认定为 `已排序` + `未排序` 两个数组拼接而成, 每次从未排序数组中找出最小的元素, 并将其交换到已排序数组的尾部

## 算法
```javascript
function selectionSort(arr) {
    const len = arr.length
    for (let i = 0; i < len - 1; i++) {
        let minIdx = i
        for (let j = i + 1; j < len - 1; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j
            }
        }
        let temp = arr[minIdx]
        arr[minIdx] = arr[i]
        arr[i] = temp
    }
}
```

## 复杂度
### 时间复杂度 `O(n^2)`
因为要双重遍历, 所以是 `O(n^2)`

### 空间复杂度 `O(1)`
由于没有额外的使用数组, 只用了一个中转变量, 所以是 `O(1)`

## 最快情况
无

## 最慢情况
无

## 稳定性
不稳定
