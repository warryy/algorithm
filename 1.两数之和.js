/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//   const resArr = []
//   nums.forEach((nItem, nIdx) => {
//     const index = nums.slice(nIdx + 1).indexOf(target - nItem)
//     if (~index) {
//       resArr.push(nIdx, index + nIdx + 1)
//     }
//   })
//   return resArr
// };
// =================================================
// var twoSum = function(nums, target) {
//   for(let i =0; i < nums.length; ++i) {
//     const index = nums.slice(i + 1).indexOf(target - nums[i])
//     if (~index) {
//       return [i, index + i + 1]
//     }
//   }
//   return []
// };
// =================================================
var twoSum = function(nums, target) {
  const matchMap = nums.reduce((nAcc, nItem, nIdx) => {
    nAcc[target - nItem] = nIdx
    return nAcc
  }, {})
  for(let i =0; i < nums.length; ++i) {
    const catchIdx = matchMap[nums[i]]
    if (catchIdx !== undefined && catchIdx !== i) {
      return [i, catchIdx]
    }
  }
  return []
};
// @lc code=end
