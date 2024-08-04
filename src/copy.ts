/** cSpell:ignore nums */

function partition(nums: number[], left: number, right: number): number {
  let l = left,
    r = right;

  // 中位数
  let pivotNum = nums[l];

  // 当左右边界未交叉
  while (l < r) {
    // 右边界数据比中位数大或者相等, 则数据放在原地, 缩小右边界
    while (nums[r] >= pivotNum && l < r) {
      --r;
    }
    // 右边界数据比中位数小, 则将右边界的数据放到左边界来
    nums[l] = nums[r];
    // 然后去看左边界, 左边界比中位数小, 则留在原地
    while (nums[l] < pivotNum && l < r) {
      ++l;
    }
    // 找到第一个大于等于中位数的左边界, 把左边界数据放到右边界去
    nums[r] = nums[l];
  }
  nums[l] = pivotNum
  return l
}

function quickSort(nums: number[], left?: number, right?: number): number[] {
  const l = left ?? 0;
  const r = right ?? nums.length - 1;
  if (l < r) {
    const partitionIndex = partition(nums, l, r);
    quickSort(nums, l, partitionIndex - 1);
    quickSort(nums, partitionIndex + 1, r);
  }
  
  return nums
}

console.log(quickSort([4, 3, 2, 1]));
export default {}