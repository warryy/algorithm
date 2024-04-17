var binarySearch = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      right = mid - 1;
      continue;
    }
    left = mid + 1;
  }

  return -1;
};
console.log(binarySearch([1, 2], 0));
console.log(binarySearch([1, 2], 1));
console.log(binarySearch([1, 2], 2));
console.log(binarySearch([1, 2], 3));

const binaryLeftSearch = (nums, target) => {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] >= target) {
      right = mid;
      continue;
    }
    left = mid + 1;
  }

  if (left === 0 && nums[left] !== target) {
    return -1;
  }
  return left;
};
console.log(binaryLeftSearch([1, 2, 2, 2, 3], 0));
console.log(binaryLeftSearch([1, 2, 2, 2, 3], 1));
console.log(binaryLeftSearch([1, 2, 2, 2, 3], 2));
console.log(binaryLeftSearch([1, 2, 2, 2, 3], 3));
console.log(binaryLeftSearch([1, 2, 2, 2, 3], 4));

const binaryRightSearch = (nums, target) => {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] <= target) {
      left = mid + 1;
      continue;
    }
    right = mid;
  }

  if (left === nums.length && nums[left - 1] !== target) {
    return left;
  }

  return left - 1;
};

console.log(binaryRightSearch([1, 2, 2, 2, 3], 0));
console.log(binaryRightSearch([1, 2, 2, 2, 3], 1));
console.log(binaryRightSearch([1, 2, 2, 2, 3], 2));
console.log(binaryRightSearch([1, 2, 2, 2, 3], 3));
console.log(binaryRightSearch([1, 2, 2, 2, 3], 4));
