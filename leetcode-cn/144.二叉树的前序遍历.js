/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal1 = function (root, resArr = []) {
    if (root) {
        resArr.push(root.val);
        preorderTraversal1(root.left, resArr);
        preorderTraversal1(root.right, resArr);
    }
    return resArr;
};

var preorderTraversal = function (root) {
    let stack = [],
        resArr = [],
        cur = root;

    while (cur || stack.length > 0) {
        while (cur) {
            resArr.push(cur.val);
            stack.push(cur);
            cur = cur.left;
        }

        cur = stack.pop().right;
    }
    return resArr;
};

// @lc code=end

