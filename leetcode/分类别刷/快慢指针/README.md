# 问题类型
一般用于数组或字符串的原地删除或修改题型
# 概述
快指针用于遍历, 慢指针用于保存结果, 对应题库
# 题型
- [26. 删除有序数组的重复项](https://leetcode.cn/problems/remove-duplicates-from-sorted-array/)
- [83. 删除链表中的重复元素](https://leetcode.cn/problems/remove-duplicates-from-sorted-list/)

# 衍生: 滑动窗口
将快慢指针之间的区域成为窗口, 一般为左开右闭 `[left, right)`
因为这样初始化 `let left = 0, right = 0` 的时候, 窗口中的元素正好为 `0` 个
## 算法框架
```typescript
    slidingWindow (s: string) {
        let left = 0, right = 0
        while (right < s.length()>) {
            // 开始向窗口中增加元素
            const outChart = s[right]
            right ++

            // 这里写算法的具体逻辑

            // 缩小窗口
            while (window needs shrink) {
                const outChart = s[left]
                left ++ 
                // 这里写缩小窗口的业务代码
            }
        }
    }
```
## 对应题库
- [76. 最小覆盖子串](https://leetcode.cn/problems/minimum-window-substring/)
- [438. 找到字符串中所有字母异位词](https://leetcode.cn/problems/find-all-anagrams-in-a-string/)
- [3. 无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)