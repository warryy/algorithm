# Three sum(ing)

## 知识点: `Array`

## 难度: `Middle`

## 题目:
[传送门](https://leetcode.com/problems/3sum/)


## 解法:
1. 先快排, 时间复杂度 `O(nlog(n))`
2. 从左往右找第一个数, 然后用双指针, 从右侧区间里找到三者相加为零的数. `O(n^2)`
###
```typescript
function swap(arr: number[], left: number, right: number) {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

function partation(arr: number[], left: number, right: number): number {
  let l = left,
    r = right;
  let pivot = arr[l];

  while (l < r) {
    while (l < r && arr[r] >= pivot) {
      --r;
    }
    arr[l] = arr[r];
    while (l < r && arr[l] < pivot) {
      ++l;
    }
    arr[r] = arr[l];
  }

  arr[l] = pivot;
  return l;
}

function quickSort(arr: number[], left?: number, right?: number) {
  let l = left ?? 0;
  let r = right ?? arr.length - 1;
  if (l < r) {
    const partationIdx = partation(arr, l, r);
    quickSort(arr, l, partationIdx - 1);
    quickSort(arr, partationIdx + 1, r);
  }
}

function threeSum(nums: number[]): number[][] {
  quickSort(nums)
  const res: number[][] = [];

  for (let i = 0; i < nums.length - 2; ++i) {
    if (nums[i] > 0) {
      return res;
    }

    if (nums[i] === nums[i - 1]) {
      continue;
    }

    let l = i + 1,
      r = nums.length - 1;
    while (l < r) {
      if (nums[i] + nums[l] + nums[r] === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[r] === nums[r - 1]) {
          --r;
        }
        --r;
        while (l < r && nums[l] === nums[l + 1]) {
          ++l;
        }
        ++l;
        continue;
      }

      if (nums[i] + nums[l] + nums[r] > 0) {
        while (l < r && nums[r] === nums[r - 1]) {
          --r;
        }
        --r;
        continue;
      }

      if (nums[i] + nums[l] + nums[r] < 0) {
        while (l < r && nums[l] === nums[l + 1]) {
          ++l;
        }
        ++l;
      }
    }
  }
  return res;
}

console.log(JSON.stringify(threeSum([-1, 0, 1, 2, -1, -4])));

```
