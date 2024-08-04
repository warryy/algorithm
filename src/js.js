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
