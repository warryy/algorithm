/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let l = 0, r = 0
  let res = 0
  let win = {}
  while(r < s.length) {
      const inCode = s[r]
      ++r

      if (!win[inCode]) {
          win[inCode] = 1
          res = res < r - l ? r - l : res
      }

      while(win[inCode] > 1) {
          const outChart = s[l]
          ++l

          --win[outChart]
      }
  }

  return res
};
console.log(lengthOfLongestSubstring("pwwkew"));
