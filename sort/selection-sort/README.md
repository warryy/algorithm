# insert sort 

## 知识点: `sort`, `insert sort`

## 简介
> 一句话: 将未排序的数组中的第一个元素通过类似冒泡的方式 `插入` 到已排序数组中
> 
> `插入排序` 将原数组认定为 `已排序` + `未排序` 两个数组拼接而成, 每次取未排序数组中的第一个元素和已排序数组元素进行遍历比较, 并放在正确位置, 此比较方法类似于冒泡方式

## 算法
```javascript
function insertSort(arr) {
    const len = arr.length
    for (let i = 0; i < len - 1; i++) {
        let j = i + 1;
        while (j > 0 && arr[j] < arr[j - 1]) {
            let temp = arr[j]
            arr[j] = arr[j - 1]
            arr[j - 1] = temp
            j--
        }
    }
}
```

## 复杂度
### 时间复杂度 `O(n^2)`
因为要双重遍历, 所以是 `O(n^2)`

### 空间复杂度 `O(1)`
由于没有额外的使用数组, 只用了一个中转变量, 所以是 `O(1)`

## 最快情况
已排序

## 最慢情况
未排序

## 稳定性
稳定
