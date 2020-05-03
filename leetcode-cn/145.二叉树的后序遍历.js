/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal1 = function (root, resArr = []) {
    if (root) {
        postorderTraversal(root.left, resArr);
        postorderTraversal(root.right, resArr);
        resArr.push(root.val);
    }
    return resArr;
};

// 递归1
var postorderTraversal2 = function (root) {
    let stack = [],
        resArr = [],
        cur = root;

    while (cur || stack.length > 0) {
        while (cur) {
            stack.push(cur);
            resArr.unshift(cur.val);
            cur = cur.right;
        }
        cur = stack.pop().left;
    }
    return resArr;
};
// 同递归2
var postorderTraversal3 = function (root) {
    let results = []
    if (root == null) { return results }
    let temp = [root]
    while (temp.length != 0) {
        let node = temp.pop()
        results.unshift(node.val)
        node.right != null ? temp.push(node.right) : 0
        node.left != null ? temp.push(node.left) : 0
    }

    return results
};

// 递归3
var postorderTraversal = function (root) {
    let stack = [],
        resArr = [],
        cur = root,
        flag;

    while (cur || stack.length > 0) {
        while (cur) {
            // 使用一个变量来记当前节点的右子节点是否已经被遍历过
            stack.push([cur, false]);
            cur = cur.left;
        }

        [cur, flag] = stack.pop();

        if (!flag && cur.right) {
            stack.push([cur, true]);
            cur = cur.right;
        } else {
            resArr.push(cur.val);
            cur = null;
        }
    }
    return resArr;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
let treeArr = [1, null, 2, 3];
let root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

console.log(postorderTraversal(root))

// @lc code=end

