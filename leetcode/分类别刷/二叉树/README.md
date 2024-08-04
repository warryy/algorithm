# 二叉树
## 迭代框架
```javascript
function traverse(root) {
    if (root === null) {
        return;
    }
    // 前序遍历
    traverse(root.left);
    // 中序遍历
    traverse(root.right);
    // 后序遍历
}
```
## 迭代思想
> 一般从上到下获取二叉树信息的时候, 就可以考虑迭代思想, 例如输出每个节点的深度
```javascript
let res = 'xxx'

function mainFn(root) {
    traverse(root)
    return res
}

function traverse(root) {
    if (root === null) {
        return;
    }
    // 前序遍历处理 res
    traverse(root.left);
    // 中序遍历处理 res
    traverse(root.right);
    // 后序遍历处理 res
}
```
## 递归思想(分治法)
> 一般当前节点需要所有子节点信息的时候, 需要递归思想, 此时需要考虑好两点:
> 1. 当前节点的结果和子节点的数据关联规律
> 2. 函数的返回值
```javascript
function mainFn(root) {
    if (root === null) {
        return 'xxx'
    }
    let res = 'xxx';
    const leftRes = mainFn(root.left);
    const rightRes = mainFn(root.right);

    return deal(leftRes, rightRes);
}
```
## 层序遍历
```javascript
const res = [];
function levelTraverse(root) {
  if (!root === null) {
    return;
  }

  const q = [root];
  while (q.length) {
    for (let i = 0; i < q.length; ++i) {
      const cur = q.shift();
      res.push(cur.val);
      if (cur.left !== null) {
        q.push(cur.left);
      }
      if (cur.right !== null) {
        q.push(cur.right);
      }
    }
  }
}
```