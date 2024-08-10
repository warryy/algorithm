function searchMatrix(matrix: number[][], target: number): boolean {
  let min = 0,
    max = Math.min(matrix.length - 1, matrix[0].length - 1);
  while (min <= max && matrix[min][min] <= target) {
    if (matrix[min][min] === target) {
      return true;
    }
    ++min;
  }
  max = min;
  --min;
  for (let i = 0; i <= min; ++i) {
    for (let j = max; j < matrix[0].length; ++j) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }

  for (let i = max; i < matrix.length; ++i) {
    for (let j = 0; j <= min; ++j) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }
  return false;
}

console.log(searchMatrix([[5], [6]], 6));
